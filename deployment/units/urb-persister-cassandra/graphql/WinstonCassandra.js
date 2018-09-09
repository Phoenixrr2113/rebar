"use strict";

var _util = _interopRequireDefault(require("util"));
var _events = _interopRequireDefault(require("events"));

var _winston = _interopRequireDefault(require("winston"));
var _cassandraDriver = _interopRequireDefault(require("cassandra-driver"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var defaultOptions = {
  //column family to store the logs
  table: 'logs',
  //determines if the partition key is changed per day or hour
  partitionBy: 'day',
  consistency: _cassandraDriver.default.types.consistencies.quorum,
  level: 'info',
  name: 'cassandra' };


function Cassandra(options) {
  if (!options) {
    throw new Error('Transport options is required');
  }

  if (!options.keyspace) {
    throw new Error('You must specify the options.keyspace');
  }

  this.options = Object.assign({}, defaultOptions, options);

  //winston options
  this.name = this.options.name;
  this.level = this.options.level;

  //create a queue object that will emit the event 'prepared'
  this.schemaStatus = new _events.default.EventEmitter();
  this.schemaStatus.setMaxListeners(0);
  this.client = new _cassandraDriver.default.Client(this.options);
}

_util.default.inherits(Cassandra, _winston.default.Transport);

Cassandra.prototype.log = function (level, msg, meta, callback) {
  var self = this;
  return self._insertLog(level, msg, meta, function (err) {
    callback(err, !err);
  });
};

/**
    * Gets the log partition key
    */
Cassandra.prototype.getKey = function () {
  if (this.options.partitionBy === 'day') {
    return new Date().toISOString().slice(0, 10);
  } else if (this.options.partitionBy === 'hour') {
    return new Date().toISOString().slice(0, 13);
  }
  return null;
};

/**
    * Inserts the log in the db
    */
Cassandra.prototype._insertLog = function (level, msg, meta, callback) {
  var key = this.getKey();
  if (!key) {
    return callback(new Error('Partition ' + this.options.partitionBy + ' not supported'), false);
  }
  //execute as a prepared query as it would be executed multiple times
  return this.client.execute(
  'INSERT INTO ' +
  this.options.table +
  ' (key, date, level, message, meta) VALUES (?, ?, ?, ?, ?)',
  [key, new Date(), level, msg, _util.default.inspect(meta)],
  { prepare: true, consistency: this.options.consistency },
  callback);

};

//Define as a property of winston transports for backward compatibility
_winston.default.transports.Cassandra = Cassandra;
module.exports = Cassandra;
//The rest of winston transports uses (module).name convention
//Create a field to allow consumers to interact in the same way
module.exports.Cassandra = Cassandra;
module.exports.types = _cassandraDriver.default.types;
//# sourceMappingURL=WinstonCassandra.js.map