'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _styles = require('material-ui/styles');
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  content: theme.mixins.gutters({
    margin: '0 auto',
    flex: '1 1 100%',
    maxWidth: '100%',
    paddingTop: theme.mixins.toolbar.minHeight + 16 }),

  [theme.breakpoints.up(1000)]: {
    content: {
      paddingTop: theme.mixins.toolbar.minHeight + 32,
      margin: '0 auto',
      maxWidth: 952 } },


  [theme.breakpoints.up('sm')]: {
    content: {
      paddingTop: theme.mixins.toolbar.minHeight + 24 } } });




class ResponsiveContentArea extends _react2.default.Component {
  render() {
    const { classes } = this.props;

    return _react2.default.createElement('div', { className: classes.content }, this.props.children);
  }}exports.default =


(0, _styles.withStyles)(styles)(ResponsiveContentArea);
//# sourceMappingURL=ResponsiveContentArea.js.map