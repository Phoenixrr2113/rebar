"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _react = _interopRequireDefault(require("react"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  title: {
    marginLeft: 8,
    marginTop: 8 } };



class AppDrawerTitle extends _react.default.Component


{constructor(...args) {var _temp;return _temp = super(...args), this.
    _handle_GoToHome = () => {
      this.props.handle_GoTo('/');
    }, _temp;}
  render() {
    const { classes } = this.props;

    return (
      _react.default.createElement("div", { onClick: this._handle_GoToHome },
      _react.default.createElement(_Typography.default, { className: classes.title, variant: "title", gutterBottom: true, color: "inherit" }, "Machine Acuity's Rebar")));




  }}var _default =


(0, _styles.withStyles)(styles)(AppDrawerTitle);exports.default = _default;
//# sourceMappingURL=AppDrawerTitle.js.map