// @flow

import fs from 'fs'

//import AppRegistryName from '../_configuration/rb-base-app/AppRegistryName'
import getLocalIP from '../rb-base-server/getLocalIP'

// Read environment
require( 'dotenv' ).load()

const port = process.env.PORT
if ( port == null || typeof port !== 'string' )
  throw new Error( 'Error: update-ip requires the environment variable PORT to be set' )

let IPAddress = process.argv[2]

if ( IPAddress === undefined ) IPAddress = getLocalIP()

if ( IPAddress !== undefined ) {
  console.log( 'IP Address:' + IPAddress )
  updateIPInFile(
    './.env',
    'ACCESS_CONTROL_ALLOWED_ORIGINS=',
    'ACCESS_CONTROL_ALLOWED_ORIGINS=["http://' + IPAddress + ':' + port + '"]',
    IPAddress,
  )
  updateIPInFile( './.env', 'HOST=', 'HOST=' + IPAddress, IPAddress )
} else {
  console.log( 'IP Address not specified and could not be found' )
}

function updateIPInFile( fileName, searchString, newContentOfLine, IPAddress ) {
  try {
    let fileLines = fs.readFileSync( fileName, 'utf8' ).split( '\n' )
    let index = 0

    while ( index < fileLines.length ) {
      if ( fileLines[index].indexOf( searchString ) > -1 ) {
        if ( fileLines[index] === newContentOfLine )
          console.log( '[' + fileName + '] is already up to date' )
        else {
          fileLines[index] = newContentOfLine
          fs.writeFileSync( fileName, fileLines.join( '\n' ) )

          console.log( '[' + fileName + '] has been updated with local IP ' + IPAddress )
        }
        break
      } else {
        index++
      }
    }
  } catch ( err ) {
    console.log( '[' + fileName + '] has not been been updated with local IP because ' + err )
  }
}
