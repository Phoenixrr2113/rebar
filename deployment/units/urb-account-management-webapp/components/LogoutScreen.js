"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _react = _interopRequireDefault(require("react"));

var _ResponsiveContentArea = _interopRequireDefault(require("../../urb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 400 } });



class LogoutScreen extends _react.default.Component







{
  constructor(props, context) {
    super(props, context);this.







    _handle_onClick_Logout = async () => {
      this.setState({ currentOperation: 'logging out' });

      try {
        const loc = window.location;
        const host = loc.protocol + '//' + loc.hostname + ':' + loc.port;

        const response = await fetch(host + '/auth/logout', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json' },

          body: '{}' });


        const responseData = await response.json();

        if (responseData.success) {
          // In case of success, notify user
          this.setState({ currentOperation: 'success' });
        } else {
          // In case of error, tell user what the error is
          this.setState({
            currentOperation: 'failure',
            errorMessage: responseData.error });

        }
      } catch (err) {
        // In case response could not be received properly, tell the user
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          errorMessage:
          'Did not receive proper response from server. Please try again. Message:' + err.message });

      }
    };this.

    _handle_onClick_CancelLogout = () => {
      this.setState({
        currentOperation: 'failure',
        errorMessage: 'User log out has been canceled' });

    };this.

    _handle_onClick_TryAgain = () => {
      this.setState({
        currentOperation: 'confirm',
        errorMessage: '' });

    };this.

    _handle_onClick_Continue = () => {
      window.location.replace('/');
    };this.state = { currentOperation: 'confirm', errorMessage: '' };}

  renderCreating() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Creating user" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { component: "p" }, "Logging out. Please wait ..."),
      _react.default.createElement("br", null), " ", _react.default.createElement("br", null),
      _react.default.createElement(_LinearProgress.default, { mode: "query" })),

      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_CancelLogout }, "Cancel"))));



  }

  renderSuccess() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Logout" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { component: "p" }, "You have been logged out.")),

      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_Continue }, "Continue"))));



  }

  renderFailure() {
    const { classes } = this.props;
    const { errorMessage } = this.state;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Creating user" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { component: "p" }, "Failed logging out because: ", errorMessage, "!")),

      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_TryAgain }, "Try Again"))));



  }

  renderPrompt() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Log Out" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { component: "p" }, "You are currently logged in. Are you sure you want to log out?")),



      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_Logout }, "Yes, Log Out"))));



  }

  render() {
    const { currentOperation } = this.state;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      currentOperation === 'confirm' && this.renderPrompt(),
      currentOperation === 'logging out' && this.renderCreating(),
      currentOperation === 'success' && this.renderSuccess(),
      currentOperation === 'failure' && this.renderFailure()));


  }}var _default =


(0, _styles.withStyles)(styles)(LogoutScreen);exports.default = _default;
//# sourceMappingURL=LogoutScreen.js.map