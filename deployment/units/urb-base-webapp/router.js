'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.historyMiddlewares = undefined;exports.










createResolver = createResolver;exports.








routeConfig = routeConfig;var _queryMiddleware = require('farce/lib/queryMiddleware');var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);var _makeRouteConfig = require('found/lib/makeRouteConfig');var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);var _foundRelay = require('found-relay');var _relayRuntime = require('relay-runtime');var _createRoutes = require('../_configuration/urb-base-webapp/createRoutes');var _createRoutes2 = _interopRequireDefault(_createRoutes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}const historyMiddlewares = exports.historyMiddlewares = [_queryMiddleware2.default];function createResolver(fetcher) {const environment = new _relayRuntime.Environment({ network: _relayRuntime.Network.create((...args) => fetcher.fetch(...args)), store: new _relayRuntime.Store(new _relayRuntime.RecordSource()) });return new _foundRelay.Resolver(environment);}function routeConfig(siteConfiguration) {
  return (0, _makeRouteConfig2.default)((0, _createRoutes2.default)(siteConfiguration));
}
//# sourceMappingURL=router.js.map