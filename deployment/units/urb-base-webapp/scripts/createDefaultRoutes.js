'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _graphql;

var _Route = require('found/lib/Route');var _Route2 = _interopRequireDefault(_Route);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _AppFrame = require('../../_configuration/urb-base-webapp/AppFrame');var _AppFrame2 = _interopRequireDefault(_AppFrame);
var _routesAppFrame = require('../../_configuration/urb-base-webapp/routesAppFrame');var _routesAppFrame2 = _interopRequireDefault(_routesAppFrame);
var _routesRoot = require('../../_configuration/urb-base-webapp/routesRoot');var _routesRoot2 = _interopRequireDefault(_routesRoot);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

siteConfiguration => {
  return (
    _react2.default.createElement(_Route2.default, { path: '/' },
      _react2.default.createElement(_Route2.default, {
          path: '/',
          Component: _AppFrame2.default,
          query: _graphql || (_graphql = function () {return require('./__generated__/createDefaultRoutes_AppFrame_Query.graphql');}) }, _routesAppFrame2.default),









      _routesRoot2.default.length > 0 && _routesRoot2.default));


};
//# sourceMappingURL=createDefaultRoutes.js.map