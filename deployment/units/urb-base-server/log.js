"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _debug = require("../_configuration/debug");
var _defaultPersister = _interopRequireDefault(require("../_configuration/urb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

// Set up transports
const transports = [];

// If set, show all log messages on console
if (_debug.debugWriteToConsoleLog) {
  transports.push(new _winston.default.transports.Console());
}

// If persister specified logger, use it
const defaultPersisterLogger = _defaultPersister.default.createLogger();
if (defaultPersisterLogger) {
  transports.push(defaultPersisterLogger);
}

// Create winston
const log = new _winston.default.Logger({ transports });var _default =

log;exports.default = _default;
//# sourceMappingURL=log.js.map