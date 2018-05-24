'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _ListItem = require('@material-ui/core/ListItem');var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class NavMenuItemWithIcon extends _react2.default.Component



{
  render() {
    return (
      _react2.default.createElement(_ListItem2.default, { button: true, onClick: this.props.onClick },
        _react2.default.createElement(_ListItemIcon2.default, null, this.props.icon),
        _react2.default.createElement(_ListItemText2.default, { primary: this.props.label })));


  }}exports.default =


NavMenuItemWithIcon;
//# sourceMappingURL=NavMenuItemWithIcon.js.map