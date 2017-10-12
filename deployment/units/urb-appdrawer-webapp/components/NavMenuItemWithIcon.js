'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _List = require('material-ui/List');
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class NavMenuItemWithIcon extends _react2.default.Component



{
  render() {
    return (
      _react2.default.createElement(_List.ListItem, { button: true, onClick: this.props.onClick },
        _react2.default.createElement(_List.ListItemIcon, null, this.props.icon),
        _react2.default.createElement(_List.ListItemText, { primary: this.props.label })));


  }}exports.default =


NavMenuItemWithIcon;
//# sourceMappingURL=NavMenuItemWithIcon.js.map