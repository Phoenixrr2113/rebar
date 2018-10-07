// @flow

import fs from 'fs'

// Read environment
require( 'dotenv' ).load()

const packageJSON = require( '../../package.json' )

console.log( 'Current version in package.json: ' + packageJSON.version )

const arrVersion = packageJSON.version.split( '.' )
arrVersion[2]++
packageJSON.version = arrVersion.join( '.' )

console.log( 'New version in package.json: ' + packageJSON.version )

fs.writeFileSync( 'package.json', JSON.stringify( packageJSON, null, 2 ) )
