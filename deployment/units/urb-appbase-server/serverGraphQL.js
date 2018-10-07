"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));
var _express = _interopRequireDefault(require("express"));
var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _log = _interopRequireDefault(require("../urb-base-server/log"));
var _requestLoggers = require("../_configuration/urb-base-server/requestLoggers");
var _logServerRequest = _interopRequireDefault(require("../urb-base-server/logServerRequest"));
var _ObjectManager = require("../urb-base-server/ObjectManager");

var _checkCredentials = require("./checkCredentials");




var _schema = _interopRequireDefault(require("./graphql/schema"));


require("../_configuration/urb-base-server/graphql/_schemas");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Schema for GraphQL server
// Guarantee that all object registrations and schema definitions are executed
// Create router for GraphQL
const serverGraphQL = (0, _express.default)();

// Set up parser
serverGraphQL.use(_bodyParser.default.json());

// Set up logging
serverGraphQL.use((req, res, next) => (0, _logServerRequest.default)(req, res, next, _requestLoggers.requestLoggerGraphQL));

async function root(req, res, next) {
  try {
    const objectManager = await (0, _ObjectManager.getObjectManager)(req, res);
    if (objectManager.siteInformation) {
      try {
        const a_User = (await (0, _checkCredentials.getUserAndSessionIDByUserToken1)(objectManager, req)).User;

        res.codeFoundriesInjected = { user: a_User };
        await (0, _checkCredentials.verifyUserAuthToken)(a_User, req);

        (0, _expressGraphql.default)(() => {
          return {
            schema: _schema.default,
            rootValue: objectManager,
            pretty: true,
            graphiql: true };

        })(req, res, next);
      } catch (err) {
        (0, _checkCredentials.serveAuthenticationFailed)(req, res, err, true);
      }
    }
  } catch (err) {
    _log.default.log({ level: 'error', message: 'Error: GraphQL', details: err });
    res.status(500).send(
    JSON.stringify({
      error: 'An error has occurred while running GraphQL query' }));


  }
}
serverGraphQL.use('/', root);var _default =

serverGraphQL;exports.default = _default;
//# sourceMappingURL=serverGraphQL.js.map