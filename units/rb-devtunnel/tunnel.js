const { spawn } = require( 'child_process' )
const http = require( 'http' )

const httpProxy = require( 'http-proxy' )

function createDevHostProxy( headers, proxyPort, serverPort ) {
  var proxy = httpProxy.createProxyServer({})

  // Add headers
  proxy.on( 'proxyReq', function( proxyReq, req, res, options ) {
    for ( let headerName in headers ) proxyReq.setHeader( headerName, headers[headerName])
  })

  var server = http.createServer( function( req, res ) {
    // Forward to server port
    proxy.web( req, res, {
      target: 'http://127.0.0.1:' + serverPort,
    })
  })

  // Listen at proxy port
  console.log( serverPort + ' -> ' + proxyPort + ' ' + JSON.stringify( headers ) )
  server.listen( proxyPort )
}

function establishTunnel( domainName, proxyPort, applicationPort ) {
  console.log(
    'Establishing ' +
      domainName +
      '.localtunnel.me - > :' +
      proxyPort +
      ' (bound to :' +
      applicationPort +
      ')',
  )

  const child = spawn( './node_modules/.bin/lt', [
    '--port',
    '' + proxyPort,
    '--subdomain',
    domainName,
  ])

  child.stdout.on( 'data', data => {
    console.log( '' + data )
  })

  child.stderr.on( 'data', data => {
    console.error( '' + data )
  })

  child.on( 'exit', code => {
    if ( code !== 0 ) {
      console.error(
        'lighttunnel for port ' + proxyPort + ' exited with ' + code + ', restarting ...',
      )
      setTimeout( () => establishTunnel( domainName, proxyPort ) )
    }
  })
}

function startProxiesAndTunnels( tunnels ) {
  const { applications, proxyPortsStartAt } = tunnels

  let proxyPortOffset = 0
  for ( let application of applications ) {
    const { applicationPort } = application.local

    for ( let pub of application.public ) {
      createDevHostProxy( pub.headers, proxyPortsStartAt + proxyPortOffset, applicationPort )
      establishTunnel( pub.subdomain, proxyPortsStartAt + proxyPortOffset, applicationPort )

      proxyPortOffset++
    }
  }
}

const tunnels = require( '../_configuration/rb-devtunnel/tunnels.json' )

startProxiesAndTunnels( tunnels )
