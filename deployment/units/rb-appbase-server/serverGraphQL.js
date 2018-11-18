"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));
var _express = _interopRequireDefault(require("express"));
var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _log = _interopRequireDefault(require("../rb-base-server/log"));
var _requestLoggers = require("../_configuration/rb-base-server/requestLoggers");
var _logServerRequest = _interopRequireDefault(require("../rb-base-server/logServerRequest"));
var _ObjectManager = require("../rb-base-server/ObjectManager");

var _checkCredentials = require("./checkCredentials");




var _schema = _interopRequireDefault(require("./graphql/schema"));


require("../_configuration/rb-base-server/graphql/_schemas");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Schema for GraphQL server
// Guarantee that all object registrations and schema definitions are executed
// Create router for GraphQL
const serverGraphQL = (0, _express.default)();

// Set up parser
serverGraphQL.use(_bodyParser.default.json());

// Set up logging
serverGraphQL.use((req, res, next) => (0, _logServerRequest.default)(req, res, next, _requestLoggers.requestLoggerGraphQL));

//

function graphQLError(message) {
  return JSON.stringify({
    errors: [
    {
      message,
      locations: [
      {
        line: 888,
        column: 777 }],


      stack: 'No stack information available',
      path: ['node'] }],


    data: null });

}

//

async function root(req, res, next) {
  try {
    const objectManager = await (0, _ObjectManager.getObjectManager)(req, res);

    const UserAndSession = await (0, _checkCredentials.getUserAndSessionIDByUserToken1_async)(objectManager, req, true);
    if (!UserAndSession) {
      res.
      status(500).
      send(graphQLError('GraphQL server was given a session, but the session is invalid'));
      return;
    }

    const a_User = UserAndSession.User;
    const a_UserSession = UserAndSession.UserSession;

    res.injectedByRebarFrameworks = { userSession: a_UserSession };

    const verificationIssue = (0, _checkCredentials.verifyUserToken2)(a_User, req);
    if (verificationIssue) {
      (0, _checkCredentials.serveAuthenticationFailed)(req, res, verificationIssue, true);
      return;
    }

    (0, _expressGraphql.default)(() => {
      return {
        schema: _schema.default,
        rootValue: objectManager,
        pretty: true,
        graphiql: false // TODO [Sandstone][server] Look into re-enabling GraphiQL
      };
    })(req, res, next);
  } catch (err) {
    (0, _log.default)('error', 'rb-appbase-server serverGraphQL root: Failed ', { err });
    res.status(500).send(graphQLError('An error has occurred while running GraphQL query'));
  }
}
serverGraphQL.use('/', root);var _default =

serverGraphQL;exports.default = _default;
//# sourceMappingURL=serverGraphQL.js.map