"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = defaultrequestLoggerAuth;

var _debug = require("../_configuration/debug");
var _log = _interopRequireDefault(require("../rb-base-server/log"));
var _matchInDepth = _interopRequireDefault(require("../rb-base-universal/matchInDepth"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak

function defaultrequestLoggerAuth(requestAndResponse) {
  let logLevel = null;

  // TODO: [2 Crossroads][server] Audit errors for Auth and decide which ones to log. For instasnce, 401 is a bad idea.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ((0, _matchInDepth.default)(requestAndResponse, _debug.debugWriteToLogServerRequestAuth)) {
    logLevel = 'info';
  }

  if (logLevel) _log.default.log({ level: logLevel, message: 'Auth request', details: requestAndResponse });
}
//# sourceMappingURL=defaultRequestLoggerAuth.js.map