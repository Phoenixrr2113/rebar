'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactCodeSplitting = require('react-code-splitting');var _reactCodeSplitting2 = _interopRequireDefault(_reactCodeSplitting);
var _reactRelay = require('react-relay');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _Route = require('found/lib/Route');var _Route2 = _interopRequireDefault(_Route);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const HomePageScreen = props =>
_react2.default.createElement(_reactCodeSplitting2.default, { load: Promise.resolve().then(() => require('./components/HomePageScreen')), componentProps: props });exports.default =



_react2.default.createElement(_Route2.default, {
  key: '/',
  path: '/',
  Component: HomePageScreen,
  query: function () {return require('./__generated__/routeAppFrameDemo_HomePageScreen_Query.graphql');} });
//# sourceMappingURL=routeAppFrameDemo.js.map