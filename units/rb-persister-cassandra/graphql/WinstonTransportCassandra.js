// @flow

import cql from 'cassandra-driver'
import jsonStringifySafe from 'json-stringify-safe'
import transport from 'winston-transport'

import getLocalIP from '../../rb-base-server/getLocalIP'

//

// Read environment
require( 'dotenv' ).load()

const port = process.env.PORT
if ( port == null || typeof port !== 'string' )
  throw new Error( 'rb-base-server/server.js requires the environment variable PORT to be set' )

const host = process.env.HOST
if ( host == null || typeof host !== 'string' )
  throw new Error( 'rb-base-server/server.js requires the environment variable HOST to be set' )

//

const process_pid = process.pid
const local_ip = getLocalIP()

//

const Uuid = cql.types.Uuid
//const Uuid_Null = Uuid.fromString( '00000000-0000-0000-0000-000000000000' )

//

function stringifyIfRequired( obj ) {
  if ( typeof obj === 'string' ) return obj
  else return jsonStringifySafe( obj )
}

//

export default class WinstonTransportCassandra extends transport {
  client: Object
  options: Object

  constructor( options: Object ) {
    super( options )

    if ( !options.keyspace ) {
      throw new Error(
        'rb-persister-cassandra WinstonTransportCassandra: options.keyspace is missing',
      )
    }

    this.client = new cql.Client( options )
  }

  log( info: Object, callback: Function ) {
    setImmediate( () => {
      this.emit( 'logged', info )
    })

    const { level, message, details } = info

    const self = this
    return self._insertLog( level, message, details, function( err ) {
      callback( err, !err )
    })
  }

  _insertLog( level, message, detailsSupplied, callback ) {
    // Create shallow copy of details
    const details = Object.assign({}, detailsSupplied )

    let err_message = null
    let err_stack = null
    let err_info = null
    let req_headers = null
    let req_cookies = null
    let req_ip = null
    let req_body = null
    let user_id = null
    let site_id = null

    // Retrieve error message, if available
    try {
      if ( details.err ) {
        const { message, stack } = details.err

        if ( message && stack ) {
          err_message = message
          err_stack = stack
        } else {
          err_message = details.err
        }

        delete details.err
      }
    } catch ( ignoreErr ) {
      console.error( ignoreErr )
    }

    // Retrieve err_info
    if ( details.err_info ) {
      err_info = details.err_info
      delete details.err_info
    }

    // Retrieve request
    try {
      if ( details.req ) {
        const req = details.req
        delete details.req

        req_headers = stringifyIfRequired( req.headers )
        req_cookies = stringifyIfRequired( req.cookies )
        req_body = stringifyIfRequired( req.body )
        req_ip = stringifyIfRequired( req.headers['x-real-ip'] || req.connection.remoteAddress )
      }
    } catch ( ignoreErr ) {
      console.error( ignoreErr )
    }

    // Retrieve details from ObjectManager
    try {
      // Retrieve user_id, site_id
      if ( details.objectManager ) {
        const objectManager: Object = { details }
        // Delete object first so that we do not fail json.stringify later
        delete details.objectManager

        // Get user_id
        try {
          user_id = objectManager.Viewer_User_id
          if ( !user_id instanceof Uuid ) user_id = Uuid.fromString( user_id )
        } catch ( ignoreErr ) {
          user_id = null
        }

        // Get site_id
        try {
          site_id = objectManager.siteInformation.artifact_id
          if ( !site_id instanceof Uuid ) site_id = Uuid.fromString( site_id )
        } catch ( ignoreErr ) {
          site_id = null
        }
      }

      // If artifact_id is provided, and site_id is not determined, use it
      if ( !site_id && details.artifact_id ) {
        try {
          site_id = details.artifact_id
          if ( !site_id instanceof Uuid ) site_id = Uuid.fromString( site_id )
          delete details.artifact_id
        } catch ( ignoreErr ) {
          site_id = null
        }
      }
    } catch ( ignoreErr ) {
      console.error( ignoreErr )
    }

    try {
      // Execute as a prepared query as it would be executed multiple times
      return this.client.execute(
        `INSERT INTO logs (
          key,
          date,
          level,
          message,
          details,
          local_ip,
          port,
          host,
          process_pid,
          err_message,
          err_stack,
          err_info,
          req_headers,
          req_cookies,
          req_ip,
          req_body,
          user_id,
          site_id
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      USING TTL 7776000`, // 90 * 86400 = 90 days
        [
          new Date().toISOString().slice( 0, 10 ),
          new Date(),
          level,
          message,
          stringifyIfRequired( details ),
          local_ip,
          port,
          host,
          process_pid,
          err_message,
          err_stack,
          err_info,
          req_headers,
          req_cookies,
          req_ip,
          req_body,
          user_id,
          site_id,
        ],
        { prepare: true, consistency: cql.types.consistencies.one },
        callback,
      )
    } catch ( writeErr ) {
      console.error( 'Failed to write to log because ' + writeErr.message + '\n' + writeErr.stack )
    }
  }
}
