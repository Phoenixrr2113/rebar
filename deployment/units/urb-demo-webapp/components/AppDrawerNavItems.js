'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Divider = require('material-ui/Divider');var _Divider2 = _interopRequireDefault(_Divider);
var _List = require('material-ui/List');var _List2 = _interopRequireDefault(_List);
var _styles = require('material-ui/styles');

var _Inbox = require('@material-ui/icons/Inbox');var _Inbox2 = _interopRequireDefault(_Inbox);

var _Today = require('@material-ui/icons/Today');var _Today2 = _interopRequireDefault(_Today);

var _ModeEdit = require('@material-ui/icons/ModeEdit');var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _ImportContacts = require('@material-ui/icons/ImportContacts');var _ImportContacts2 = _interopRequireDefault(_ImportContacts);

var _MyLocation = require('@material-ui/icons/MyLocation');var _MyLocation2 = _interopRequireDefault(_MyLocation);

var _OpenWith = require('@material-ui/icons/OpenWith');var _OpenWith2 = _interopRequireDefault(_OpenWith);

var _LockOutline = require('@material-ui/icons/LockOutline');var _LockOutline2 = _interopRequireDefault(_LockOutline);

var _react = require('react');var _react2 = _interopRequireDefault(_react);

var _NavMenuItemWithIcon = require('../../urb-appdrawer-webapp/components/NavMenuItemWithIcon');var _NavMenuItemWithIcon2 = _interopRequireDefault(_NavMenuItemWithIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  list: {
    width: 250,
    flex: 'initial' } };



class AppDrawerNavItems extends _react2.default.Component {
  render() {
    const { classes, onClick } = this.props;

    return (
      _react2.default.createElement('div', null,
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_List2.default, { className: classes.list },
          _react2.default.createElement(_NavMenuItemWithIcon2.default, {
            icon: _react2.default.createElement(_Inbox2.default, null),
            label: 'To Dos',
            onClick: () => onClick('/todo/') }),

          _react2.default.createElement(_NavMenuItemWithIcon2.default, {
            icon: _react2.default.createElement(_ModeEdit2.default, null),
            label: 'Ensayo Edit',
            onClick: () => onClick('/ensayo/in-place-edit/') }),

          _react2.default.createElement(_NavMenuItemWithIcon2.default, {
            icon: _react2.default.createElement(_ImportContacts2.default, null),
            label: 'Ensayo Public',
            onClick: () => onClick('/ensayo/') }),

          _react2.default.createElement(_NavMenuItemWithIcon2.default, {
            icon: _react2.default.createElement(_MyLocation2.default, null),
            label: 'Inscriptio',
            onClick: () => onClick('/inscriptio/') }),

          _react2.default.createElement(_NavMenuItemWithIcon2.default, {
            icon: _react2.default.createElement(_Today2.default, null),
            label: 'Translaticiarum',
            onClick: () => onClick('/translaticiarum/') }),

          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(_NavMenuItemWithIcon2.default, {
            icon: _react2.default.createElement(_OpenWith2.default, null),
            label: 'Viewport Dimensions',
            onClick: () => onClick('/viewport-dimensions/') }),

          _react2.default.createElement(_NavMenuItemWithIcon2.default, {
            icon: _react2.default.createElement(_LockOutline2.default, null),
            label: 'Force Login',
            onClick: () => onClick('/force-login/') }))));




  }}exports.default =


(0, _styles.withStyles)(styles)(AppDrawerNavItems);
//# sourceMappingURL=AppDrawerNavItems.js.map