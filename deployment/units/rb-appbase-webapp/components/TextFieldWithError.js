"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit } });



class TextFieldWithError extends _react.default.Component






{
  render() {
    const { classes, errorText, id, label, onChange, value } = this.props;

    const isError = errorText !== '';

    return (
      _react.default.createElement(_FormControl.default, { className: classes.formControl, error: isError, id: id, fullWidth: true },
      _react.default.createElement(_InputLabel.default, { htmlFor: isError ? 'name-simple' : 'name-error' }, label),
      _react.default.createElement(_Input.default, { id: "value", value: value, onChange: onChange }),
      _react.default.createElement(_FormHelperText.default, null, isError ? errorText : '')));


  }}var _default =


(0, _styles.withStyles)(styles)(TextFieldWithError);exports.default = _default;
//# sourceMappingURL=TextFieldWithError.js.map