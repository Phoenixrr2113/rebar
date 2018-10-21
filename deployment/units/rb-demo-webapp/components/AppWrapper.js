"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _blueGrey = _interopRequireDefault(require("@material-ui/core/colors/blueGrey"));

var _amber = _interopRequireDefault(require("@material-ui/core/colors/amber"));

var _createMuiTheme = _interopRequireDefault(require("@material-ui/core/styles/createMuiTheme"));

var _AppWrapperBase = _interopRequireDefault(require("../../rb-appbase-webapp/components/AppWrapperBase"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class AppWrapper extends _AppWrapperBase.default {
  createMUITheme() {
    return (0, _createMuiTheme.default)({
      palette: {
        primary: _blueGrey.default,
        secondary: _amber.default,
        type: 'light' },

      typography: {
        fontFamily: 'Raleway, Open Sans, Helvetica Neue, Helvetica, sans-serif' } });


  }

  getWrapperRbCtx() {
    return {};
  }}exports.default = AppWrapper;
//# sourceMappingURL=AppWrapper.js.map