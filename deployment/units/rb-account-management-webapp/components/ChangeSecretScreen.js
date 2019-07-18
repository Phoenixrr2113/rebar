"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _LockReset = _interopRequireDefault(require("mdi-material-ui/LockReset"));
var _react = _interopRequireDefault(require("react"));

var _CompositeCardHeader = _interopRequireWildcard(require("../../rb-appbase-webapp/components/CompositeCardHeader"));


var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));

var _NewUserSecretInput = _interopRequireDefault(require("./NewUserSecretInput"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//

const styles = {
  card: {
    minWidth: 350,
    maxWidth: 1200 },

  ..._CompositeCardHeader.cardHeaderContentStyles };


//

class ChangeSecretScreen extends _react.default.Component









{
  constructor(props, context) {
    super(props, context);this.









    _handle_onClick_Change = async () => {
      const { User_CurrentSecret, User_NewSecret } = this.state;

      this.setState({
        currentOperation: 'changing' });


      try {
        const loc = window.location;
        const host = loc.protocol + '//' + loc.hostname + ':' + loc.port;

        const response = await fetch(host + '/auth/change-secret', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json' },

          body: JSON.stringify({
            User_CurrentSecret,
            User_NewSecret }) });



        const responseData = await response.json();

        if (responseData.success) {
          // In case of success, notify user
          this.setState({ currentOperation: 'success' });
        } else {
          // In case of error, tell user what the error is
          this.setState({
            currentOperation: 'failure',
            executionStatus: responseData.error });

        }
      } catch (err) {
        // In case response could not be received properly, tell the user
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          executionStatus:
          'Did not receive proper response from server. Please try again. Message:' +
          err.message });

      }
    };this.

    _handle_onClick_CancelChange = () => {
      this.setState({
        currentOperation: 'failure',
        executionStatus: 'User creation has been canceled' });

    };this.

    _handle_onClick_TryAgain = () => {
      this.setState({
        User_CurrentSecret: '',
        currentOperation: 'prompt',
        executionStatus: '' });

    };this.

    _handle_onClick_Continue = () => {
      window.location.replace('/user/profile');
    };this.











































































    _handle_onChange_Identifier = event => {
      const User_CurrentSecret = event.target.value;

      this.setState({ User_CurrentSecret });
    };this.

    _handle_onUpdateSecret = secret => {
      this.setState({ User_NewSecret: secret });
    };this.state = { currentOperation: 'prompt', executionStatus: '', User_CurrentSecret: '', User_NewSecret: '' };}renderChanging() {const { classes } = this.props;return _react.default.createElement("div", null, _react.default.createElement(_CompositeCardHeader.default, { icon: _react.default.createElement(_LockReset.default, { htmlColor: "#003c78" }), title: "Changing password" }), _react.default.createElement(_Card.default, { className: classes.card, raised: true }, _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, { component: "p" }, "Updating, please wait."), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_LinearProgress.default, { mode: "query" })), _react.default.createElement(_CardActions.default, null, _react.default.createElement(_Button.default, { onClick: this._handle_onClick_CancelChange }, "Cancel"))));}renderSuccess() {const { classes } = this.props;return _react.default.createElement("div", null, _react.default.createElement(_CompositeCardHeader.default, { icon: _react.default.createElement(_LockReset.default, { htmlColor: "#003c78" }), title: "Password changed" }), _react.default.createElement(_Card.default, { className: classes.card }, _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, { component: "p" }, "Password successfully changed.")), _react.default.createElement(_CardActions.default, null, _react.default.createElement(_Button.default, { onClick: this._handle_onClick_Continue }, "Continue"))));}renderFailure() {const { classes } = this.props;const { executionStatus } = this.state;return _react.default.createElement("div", null, _react.default.createElement(_CompositeCardHeader.default, { icon: _react.default.createElement(_LockReset.default, { htmlColor: "#003c78" }), title: "Failed to change password" }), _react.default.createElement(_Card.default, { className: classes.card }, _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, { component: "p" }, "Changing password failed because ", executionStatus, ".")), _react.default.createElement(_CardActions.default, null, _react.default.createElement(_Button.default, { onClick: this._handle_onClick_TryAgain }, "Try Again"))));}

  renderPrompt() {
    const { classes } = this.props;
    const { User_CurrentSecret, User_NewSecret } = this.state;

    // User account identifier must be valid and secret must be present
    const createDisabled =
    User_CurrentSecret.length < 5 || User_NewSecret === '';

    return (
      _react.default.createElement("div", null,
      _react.default.createElement(_CompositeCardHeader.default, {
        icon: _react.default.createElement(_LockReset.default, { htmlColor: "#003c78" }),
        title: "Change password" }),


      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_TextField.default, {
        autoComplete: "password",
        fullWidth: true,
        label: "Current (old) password",
        margin: "normal",
        type: "password",
        value: User_CurrentSecret,
        variant: "outlined",
        onChange: this._handle_onChange_Identifier }),


      _react.default.createElement("br", null),
      _react.default.createElement("br", null),

      _react.default.createElement(_NewUserSecretInput.default, { onUpdateSecret: this._handle_onUpdateSecret })),

      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, {
        disabled: createDisabled,
        onClick: this._handle_onClick_Change }, "Change")))));







  }

  render() {
    const { currentOperation } = this.state;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      currentOperation === 'prompt' && this.renderPrompt(),
      currentOperation === 'changing' && this.renderChanging(),
      currentOperation === 'success' && this.renderSuccess(),
      currentOperation === 'failure' && this.renderFailure()));


  }}var _default =


(0, _styles.withStyles)(styles)(ChangeSecretScreen);exports.default = _default;
//# sourceMappingURL=ChangeSecretScreen.js.map