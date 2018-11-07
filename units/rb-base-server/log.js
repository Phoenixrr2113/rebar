// @flow

import winston from 'winston'

import { debugWriteToConsoleLog } from '../_configuration/debug'
import defaultPersister from '../_configuration/rb-base-server/graphql/defaultPersister'

// Read environment
require( 'dotenv' ).load()

// Set up transports
const transports = []

// If set, show all log messages on console
if ( debugWriteToConsoleLog ) {
  transports.push( new winston.transports.Console() )
}

// If persister specified logger, use it
const defaultPersisterLogger = defaultPersister.createLogger()
if ( defaultPersisterLogger ) {
  transports.push( defaultPersisterLogger )
}

// Create winston. Not sure why Flow does not like it. $AssureFlow
const log = winston.createLogger({ transports })

export default log
