'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =






servers;var _serverAuth = require('../../serverAuth');var _serverAuth2 = _interopRequireDefault(_serverAuth);var _serverGraphQL = require('../../serverGraphQL');var _serverGraphQL2 = _interopRequireDefault(_serverGraphQL);var _serverWebApp = require('../../serverWebApp');var _serverWebApp2 = _interopRequireDefault(_serverWebApp);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function servers(router) {
  router.use('/auth', _serverAuth2.default);
  router.use('/graphql', _serverGraphQL2.default);
  router.use(_serverWebApp2.default);
} // Authentication server
//# sourceMappingURL=servers.js.map