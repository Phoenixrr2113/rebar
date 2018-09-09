"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = defaultrequestLoggerAuth;

var _debug = require("../_configuration/debug");
var _log = _interopRequireDefault(require("../urb-base-server/log"));
var _matchInDepth = _interopRequireDefault(require("../urb-base-universal/matchInDepth"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak

function defaultrequestLoggerAuth(requestAndResponse) {
  let logLevel = null;

  // TODO: What errors for Auth should be logged? definitily not 401.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ((0, _matchInDepth.default)(requestAndResponse, _debug.debugWriteToLogServerRequestAuth)) logLevel = 'info';

  if (logLevel) _log.default.log(logLevel, 'Auth request', requestAndResponse);
}
//# sourceMappingURL=defaultRequestLoggerAuth.js.map