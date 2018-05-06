'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _blueGrey = require('material-ui/colors/blueGrey');var _blueGrey2 = _interopRequireDefault(_blueGrey);
var _amber = require('material-ui/colors/amber');var _amber2 = _interopRequireDefault(_amber);
var _createMuiTheme = require('material-ui/styles/createMuiTheme');var _createMuiTheme2 = _interopRequireDefault(_createMuiTheme);

var _AppWrapperBase = require('../../urb-base-webapp/components/AppWrapperBase');var _AppWrapperBase2 = _interopRequireDefault(_AppWrapperBase);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class AppWrapper extends _AppWrapperBase2.default {
  createMUITheme() {
    return (0, _createMuiTheme2.default)({
      palette: {
        primary: _blueGrey2.default,
        secondary: _amber2.default,
        type: 'light' },

      typography: {
        fontFamily: 'Raleway, Open Sans, Helvetica Neue, Helvetica, sans-serif' } });


  }

  getWrapperRbCtx() {
    return {};
  }}exports.default = AppWrapper;
//# sourceMappingURL=AppWrapper.js.map