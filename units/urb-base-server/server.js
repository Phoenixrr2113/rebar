// @flow

// In order to use ES7 async/await
//import 'babel-polyfill'

import path from 'path'

import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import { name, version } from '../../package.json'
import servers from '../_configuration/urb-base-server/servers'

import getLocalIP from './getLocalIP'
import log from './log'
import { initializeObjectCache } from './ObjectCache'
import ObjectManager from './ObjectManager'
import serverHealthz from './serverHealthz' // Health check endpoint server

//

// Read environment
require( 'dotenv' ).load()

const port = process.env.PORT
if ( port == null || typeof port !== 'string' )
  throw new Error( 'urb-base-server/server.js requires the environment variable PORT to be set' )

const host = process.env.HOST
if ( host == null || typeof host !== 'string' )
  throw new Error( 'urb-base-server/server.js requires the environment variable HOST to be set' ) // Log startup information

log.log({
  level: 'info',
  message: 'Starting application',
  details: {
    name: name,
    version: version,
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    PUBLIC_URL: process.env.PUBLIC_URL,
    process_title: process.title,
    process_pid: process.pid,
    local_ip: getLocalIP(),
  },
})

// Get object cache ready
initializeObjectCache()

// Main router
const server = express()

// Add headers
server.use( function( req, res, next ) {
  // Website you wish to allow to connect
  res.setHeader( 'Access-Control-Allow-Origin', process.env.PUBLIC_URL )

  // Request methods you wish to allow
  res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' )

  // Request headers you wish to allow
  res.setHeader( 'Access-Control-Allow-Headers', 'X-Requested-With,content-type' )

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader( 'Access-Control-Allow-Credentials', true )

  // Pass to next layer of middleware
  next()
}) // Configure main router

server.set( 'trust proxy', 'loopback' )
server.set( 'x-powered-by', false )
server.use( compression() )
server.use( cookieParser() ) // GraphQL server requires this

server.use( '/healthz', serverHealthz ) // Static public files server
server.use(
  express.static( path.resolve( __dirname + '/../_configuration/urb-base-server/public_files/' ), {
    maxAge: 365 * 86400, // one year
  }),
)

// Initialize server extenders
servers( server )

ObjectManager.initializePersisters( false, () => {
  // Serve - work differently in development and production. In production only the
  // specified host serves
  if ( process.env.NODE_ENV === 'production' ) {
    // Production - serve as told
    server.listen( port, host )
  } else {
    // Development server - localhost. Always run on localhost
    startDevelopmentServer( port, '127.0.0.1' )
    // Development server - on a specific IP, if different from localhost
    if ( host !== '127.0.0.1' ) startDevelopmentServer( port, host )
  }
})

function startDevelopmentServer( port, host ) {
  const localIPDevelopmentServer = express()
  localIPDevelopmentServer.use( server )
  localIPDevelopmentServer.listen( port, host )
}
