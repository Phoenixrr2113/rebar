"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.registerAuthenticationRequiredCallback = registerAuthenticationRequiredCallback;exports.unregisterAuthenticationRequiredCallback = unregisterAuthenticationRequiredCallback;exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ResponsiveContentArea = _interopRequireDefault(require("../../urb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const doNothing = () => {};

let authenticationRequiredCallback = doNothing;

function registerAuthenticationRequiredCallback(cb) {
  authenticationRequiredCallback = cb;
}

function unregisterAuthenticationRequiredCallback() {
  authenticationRequiredCallback = doNothing;
}

const styles = theme => ({
  card: {
    maxWidth: 400 } });



class RequiresAuthenticationNotice extends _react.default.Component

{
  componentDidMount() {
    authenticationRequiredCallback();
  }

  render() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Please log in" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { paragraph: true }, "Accessing this area of the application requires you to be logged in.")))));






  }}var _default =


(0, _styles.withStyles)(styles)(RequiresAuthenticationNotice);exports.default = _default;
//# sourceMappingURL=RequiresAuthentication.js.map