"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  content: {
    margin: '0 auto',
    flex: '1 1 100%',
    maxWidth: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing.unit * 3 } });



class ResponsiveContentArea extends _react.default.Component


{
  render() {
    const { classes } = this.props;

    return _react.default.createElement("div", { className: classes.content }, this.props.children);
  }}var _default =


(0, _styles.withStyles)(styles)(ResponsiveContentArea);exports.default = _default;
//# sourceMappingURL=ResponsiveContentArea.js.map