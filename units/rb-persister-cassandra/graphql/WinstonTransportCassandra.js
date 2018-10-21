// @flow

import util from 'util'

import transport from 'winston-transport'
import cql from 'cassandra-driver'

export default class WinstonTransportCassandra extends transport {
  client: Object
  options: Object

  constructor( options: Object ) {
    super( options )

    if ( !options.keyspace ) {
      throw new Error( 'You must specify the options.keyspace' )
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

  _insertLog( level, message, details, callback ) {
    // Execute as a prepared query as it would be executed multiple times
    return this.client.execute(
      'INSERT INTO logs (key, date, level, message, meta) VALUES (?, ?, ?, ?, ?)',
      [ new Date().toISOString().slice( 0, 10 ), new Date(), level, message, util.inspect( details ) ],
      { prepare: true, consistency: cql.types.consistencies.quorum },
      callback,
    )
  }
}
