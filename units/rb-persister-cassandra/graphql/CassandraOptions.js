// @flow

import CassandraDriver from 'cassandra-driver'
import ExpressCassandra from 'express-cassandra'

// Read environment
require('dotenv').config()

const CassandraOptions = {
  authProvider: null,
  // Assume localhost if not defined
  contactPoints:
    process.env.CASSANDRA_CONNECTION_POINTS != null
      ? process.env.CASSANDRA_CONNECTION_POINTS.split(',')
      : [ 'localhost' ],
  keyspace: process.env.CASSANDRA_KEYSPACE,
  localDataCenter: 'datacenter1',
  policies: {
    loadBalancing: new CassandraDriver.policies.loadBalancing
      .RoundRobinPolicy(),
  },
  queryOptions: { consistency: ExpressCassandra.consistencies.one },
  socketOptions: { readTimeout: 0 },
}

if (process.env.CASSANDRA_USER) {
  CassandraOptions.authProvider = new CassandraDriver.auth
    .PlainTextAuthProvider(
    process.env.CASSANDRA_USER,
    process.env.CASSANDRA_PASSWORD,
  )
}

export default CassandraOptions
