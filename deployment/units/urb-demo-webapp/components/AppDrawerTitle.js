'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  title: {
    marginLeft: 8,
    marginTop: 8 } };



class AppDrawerTitle extends _react2.default.Component {constructor(...args) {var _temp;return _temp = super(...args), this.




    _handle_GoToHome = () => {
      this.props.handle_GoTo('/');
    }, _temp;}
  render() {
    const { classes } = this.props;

    return (
      _react2.default.createElement('div', { onClick: this._handle_GoToHome },
        _react2.default.createElement(_Typography2.default, { className: classes.title, variant: 'title', gutterBottom: true, color: 'inherit' }, 'Code Foundries URB')));




  }}AppDrawerTitle.contextTypes = { router: _propTypes2.default.object.isRequired };exports.default =


(0, _styles.withStyles)(styles)(AppDrawerTitle);
//# sourceMappingURL=AppDrawerTitle.js.map