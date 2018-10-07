"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = defaultRequestLoggerGraphQL;

var _debug = require("../_configuration/debug");
var _log = _interopRequireDefault(require("../urb-base-server/log"));
var _matchInDepth = _interopRequireDefault(require("../urb-base-universal/matchInDepth"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak

function defaultRequestLoggerGraphQL(requestAndResponse) {
  let logLevel = null;

  // If there is an error, log it as an error
  if (requestAndResponse.response.indexOf('"errors": [') > 0) {
    logLevel = 'error';
  } else {
    if ((0, _matchInDepth.default)(requestAndResponse, _debug.debugWriteToLogServerRequestGraphQL))
      // Otherwise, if it is a trace, log it as info
      logLevel = 'info';
  }

  if (logLevel)
  _log.default.log({ level: logLevel, message: 'GraphQL request', details: requestAndResponse });
}
//# sourceMappingURL=defaultRequestLoggerGraphQL.js.map