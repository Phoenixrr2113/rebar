"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _util = _interopRequireDefault(require("util"));

var _winstonTransport = _interopRequireDefault(require("winston-transport"));
var _cassandraDriver = _interopRequireDefault(require("cassandra-driver"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class WinstonTransportCassandra extends _winstonTransport.default {



  constructor(options) {
    super(options);

    if (!options.keyspace) {
      throw new Error('You must specify the options.keyspace');
    }

    this.client = new _cassandraDriver.default.Client(options);
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    const { level, message, details } = info;

    const self = this;
    return self._insertLog(level, message, details, function (err) {
      callback(err, !err);
    });
  }

  _insertLog(level, message, details, callback) {
    // Execute as a prepared query as it would be executed multiple times
    return this.client.execute(
    'INSERT INTO logs (key, date, level, message, meta) VALUES (?, ?, ?, ?, ?)',
    [new Date().toISOString().slice(0, 10), new Date(), level, message, _util.default.inspect(details)],
    { prepare: true, consistency: _cassandraDriver.default.types.consistencies.quorum },
    callback);

  }}exports.default = WinstonTransportCassandra;
//# sourceMappingURL=WinstonTransportCassandra.js.map