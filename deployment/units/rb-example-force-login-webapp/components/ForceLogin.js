"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Card = _interopRequireWildcard(require("@material-ui/core/Card"));

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _RequiresAuthentication = _interopRequireDefault(require("../../rb-account-management-webapp/components/RequiresAuthentication"));
var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

const styles = theme => ({
  card: {
    minWidth: 275 } });



class ForceLogin extends _react.default.Component {
  render() {
    const { classes, Viewer } = this.props;

    if (Viewer.User_IsAnonymous) return _react.default.createElement(_RequiresAuthentication.default, null);
    // Anonymous users do not get to have a profile
    else
      return (
        _react.default.createElement(_ResponsiveContentArea.default, null,
        _react.default.createElement(_Card.default, { className: classes.card },
        _react.default.createElement(_Card.CardHeader, { title: "Only Authorized", subheader: "Only users who log in see this." }),
        _react.default.createElement(_Card.CardContent, null,
        _react.default.createElement(_Typography.default, { paragraph: true }, "Content seen by authorized users")))));




  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(ForceLogin), { Viewer: function () {return require("./__generated__/ForceLogin_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=ForceLogin.js.map