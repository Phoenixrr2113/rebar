"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _react = _interopRequireDefault(require("react"));

var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 320 },

  userName: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10 } });



class NewUserScreen extends _react.default.Component









{
  constructor(props, context) {
    super(props, context);this.









    _handle_onClick_Create = async () => {
      const { UserAccount_Identifier, User_Secret } = this.state;

      this.setState({
        currentOperation: 'creating',
        User_Secret: '' // In order to prevent the password from being accessed later
      });

      try {
        const loc = window.location;
        const host = loc.protocol + '//' + loc.hostname + ':' + loc.port;

        const response = await fetch(host + '/auth/createuser', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json' },

          body: JSON.stringify({
            UserAccount_Identifier: UserAccount_Identifier,
            User_Secret: User_Secret }) });



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

    _handle_onClick_CancelCreation = () => {
      this.setState({
        currentOperation: 'failure',
        errorMessage: 'User creation has been canceled' });

    };this.

    _handle_onClick_TryAgain = () => {
      this.setState({
        currentOperation: 'prompt',
        errorMessage: '' });

    };this.

    _handle_onClick_Continue = () => {
      window.location.replace('/');
    };this.state = { currentOperation: 'prompt', errorMessage: '', UserAccount_Identifier: '', User_Secret: '' };}

  renderCreating() {
    const { classes } = this.props;
    const { UserAccount_Identifier } = this.state;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Creating user" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { component: "p" }, "Creating user",

      _react.default.createElement("span", { className: classes.userName }, UserAccount_Identifier), ", please wait."),

      _react.default.createElement("br", null),
      _react.default.createElement("br", null),
      _react.default.createElement(_LinearProgress.default, { mode: "query" })),

      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_CancelCreation }, "Cancel"))));



  }

  renderSuccess() {
    const { classes } = this.props;
    const { UserAccount_Identifier } = this.state;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Creating user" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { component: "p" }, "Created user",

      _react.default.createElement("span", { className: classes.userName }, UserAccount_Identifier), ".")),


      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_Continue }, "Continue"))));



  }

  renderFailure() {
    const { classes } = this.props;
    const { UserAccount_Identifier, errorMessage } = this.state;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Creating user" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { component: "p" }, "Failed creating user",

      _react.default.createElement("span", { className: classes.userName }, UserAccount_Identifier), "because ",
      errorMessage, ".")),


      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_TryAgain }, "Try Again"))));



  }

  renderPrompt() {
    const { classes } = this.props;
    const { UserAccount_Identifier, User_Secret } = this.state;

    return (
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Create New User" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_TextField.default, {
        label: "E-Mail Address",
        fullWidth: true,
        value: UserAccount_Identifier,
        onChange: event => this.setState({ UserAccount_Identifier: event.target.value }) }),

      _react.default.createElement(_TextField.default, {
        label: "Password",
        type: "password",
        fullWidth: true,
        value: User_Secret,
        onChange: event => this.setState({ User_Secret: event.target.value }) })),


      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_Create }, "Create"))));



  }

  render() {
    const { currentOperation } = this.state;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      currentOperation === 'prompt' && this.renderPrompt(),
      currentOperation === 'creating' && this.renderCreating(),
      currentOperation === 'success' && this.renderSuccess(),
      currentOperation === 'failure' && this.renderFailure()));


  }}var _default =


(0, _styles.withStyles)(styles)(NewUserScreen);exports.default = _default;
//# sourceMappingURL=NewUserScreen.js.map