"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _cassandraDriver = _interopRequireDefault(require("cassandra-driver"));
var _expressCassandra = _interopRequireDefault(require("express-cassandra"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').config();

const CassandraOptions = {
  authProvider: null,
  // Assume localhost if not defined
  contactPoints:
  process.env.CASSANDRA_CONNECTION_POINTS != null ?
  process.env.CASSANDRA_CONNECTION_POINTS.split(',') :
  ['localhost'],
  keyspace: process.env.CASSANDRA_KEYSPACE,
  localDataCenter: 'datacenter1',
  policies: {
    loadBalancing: new _cassandraDriver.default.policies.loadBalancing.
    RoundRobinPolicy() },

  queryOptions: { consistency: _expressCassandra.default.consistencies.one },
  socketOptions: { readTimeout: 0 } };


if (process.env.CASSANDRA_USER) {
  CassandraOptions.authProvider = new _cassandraDriver.default.auth.
  PlainTextAuthProvider(
  process.env.CASSANDRA_USER,
  process.env.CASSANDRA_PASSWORD);

}var _default =

CassandraOptions;exports.default = _default;
//# sourceMappingURL=CassandraOptions.js.map