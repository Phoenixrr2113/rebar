"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _styles = require("@material-ui/core/styles");

var _Inbox = _interopRequireDefault(require("@material-ui/icons/Inbox"));

var _Today = _interopRequireDefault(require("@material-ui/icons/Today"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _ImportContacts = _interopRequireDefault(require("@material-ui/icons/ImportContacts"));

var _MyLocation = _interopRequireDefault(require("@material-ui/icons/MyLocation"));

var _OpenWith = _interopRequireDefault(require("@material-ui/icons/OpenWith"));

var _Lock = _interopRequireDefault(require("@material-ui/icons/Lock"));

var _react = _interopRequireDefault(require("react"));

var _NavMenuItemWithIcon = _interopRequireDefault(require("../../rb-appdrawer-webapp/components/NavMenuItemWithIcon"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  list: {
    width: 250,
    flex: 'initial' } };



class AppDrawerNavItems extends _react.default.Component {
  render() {
    const { classes, onClick } = this.props;

    return (
      _react.default.createElement("div", null,
      _react.default.createElement(_Divider.default, null),
      _react.default.createElement(_List.default, { className: classes.list },
      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Inbox.default, null),
        label: "To Dos",
        onClick: () => onClick('/todo/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Edit.default, null),
        label: "Ensayo Edit",
        onClick: () => onClick('/ensayo/in-place-edit/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_ImportContacts.default, null),
        label: "Ensayo Public",
        onClick: () => onClick('/ensayo/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_MyLocation.default, null),
        label: "Inscriptio",
        onClick: () => onClick('/inscriptio/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Today.default, null),
        label: "Translaticiarum",
        onClick: () => onClick('/translaticiarum/') }),

      _react.default.createElement(_Divider.default, null),
      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_OpenWith.default, null),
        label: "Viewport Dimensions",
        onClick: () => onClick('/viewport-dimensions/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Lock.default, null),
        label: "Force Login",
        onClick: () => onClick('/force-login/') }))));




  }}var _default =


(0, _styles.withStyles)(styles)(AppDrawerNavItems);exports.default = _default;
//# sourceMappingURL=AppDrawerNavItems.js.map