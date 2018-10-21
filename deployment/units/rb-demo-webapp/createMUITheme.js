"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = createMUITheme;

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _pink = _interopRequireDefault(require("@material-ui/core/colors/pink"));

var _createMuiTheme = _interopRequireDefault(require("@material-ui/core/styles/createMuiTheme"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function createMUITheme(wrapperRbCtx) {
  return (0, _createMuiTheme.default)({
    palette: {
      primary: _blue.default,
      secondary: _pink.default,
      type: 'light' } });


}
//# sourceMappingURL=createMUITheme.js.map