'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Button = require('@material-ui/core/Button');var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('@material-ui/core/Dialog');var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = require('@material-ui/core/DialogActions');var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = require('@material-ui/core/DialogContent');var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = require('@material-ui/core/DialogTitle');var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _LinearProgress = require('@material-ui/core/LinearProgress');var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _TextField = require('@material-ui/core/TextField');var _TextField2 = _interopRequireDefault(_TextField);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');var _Typography2 = _interopRequireDefault(_Typography);

var _react = require('react');var _react2 = _interopRequireDefault(_react);

var _routeAfterLogin = require('../../_configuration/urb-account-management-webapp/routeAfterLogin');var _routeAfterLogin2 = _interopRequireDefault(_routeAfterLogin);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  dialogPaper: {
    minWidth: 320 },

  grow: {
    flex: '1 1 auto' },

  userName: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10 } });



class LoginDialog extends _react2.default.Component












{
  constructor(props, context) {
    super(props, context);this.









    _handle_Close = () => {
      this.props.handlerClose();
    };this.

    _handle_onClick_LogIn = async () => {
      const { UserAccount_Identifier, User_Secret } = this.state;

      this.setState({
        currentOperation: 'in progress',
        User_Secret: '' // In order to prevent the password from being accessed later
      });

      try {
        const loc = window.location;
        const host = loc.protocol + '//' + loc.hostname + ':' + loc.port;

        const response = await fetch(host + '/auth/login', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json' },

          body: JSON.stringify({
            UserAccount_Identifier: UserAccount_Identifier,
            User_Secret: User_Secret }) });



        const responseData = await response.json();

        if (responseData.success) {
          // In case of success, realod the application from server
          window.location.replace(
          window.location.pathname === '/' ? _routeAfterLogin2.default : window.location.pathname);

        } else {
          // In case of error, tell user what the error is
          this.setState({
            currentOperation: 'failure',
            errorMessage: responseData.error });
          // ZZZ Does server really send the reason for the failed login?
        }
      } catch (err) {
        // In case response could not be received properly, tell the user
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          errorMessage:
          'Did not receive proper response from server. Please try again later. Error:' +
          err.message });

      }
    };this.

    _handle_onCLick_NewUser = () => {
      this.props.handlerNewUser();
    };this.

    _handle_onCLick_CancelLogIn = () => {
      this.setState({
        currentOperation: 'failure',
        errorMessage: 'Log in has been canceled' });

    };this.

    _handle_onClick_TryAgain = () => {
      this.setState({
        currentOperation: 'challenge',
        errorMessage: '' });

    };this.state = { currentOperation: 'challenge', errorMessage: '', UserAccount_Identifier: '', User_Secret: '' };}

  renderChallenge() {
    const { classes, open } = this.props;
    const { UserAccount_Identifier, User_Secret } = this.state;

    return (
      _react2.default.createElement(_Dialog2.default, { classes: { paper: classes.dialogPaper }, open: open, onClose: this._handle_Close },
        _react2.default.createElement(_DialogTitle2.default, null, 'Log In'),

        _react2.default.createElement(_DialogContent2.default, null,
          _react2.default.createElement(_TextField2.default, {
            label: 'E-Mail Address',
            fullWidth: true,
            value: UserAccount_Identifier,
            onChange: event => this.setState({ UserAccount_Identifier: event.target.value }) }),

          _react2.default.createElement(_TextField2.default, {
            label: 'Password',
            type: 'password',
            fullWidth: true,
            onKeyPress: ev => {
              if (ev.key === 'Enter') {
                this._handle_onClick_LogIn();
                ev.preventDefault();
              }
            },
            value: User_Secret,
            onChange: event => this.setState({ User_Secret: event.target.value }) })),


        _react2.default.createElement(_DialogActions2.default, null,
          _react2.default.createElement(_Button2.default, { color: 'primary', onClick: this._handle_onCLick_NewUser }, 'New User'),


          _react2.default.createElement('div', { className: classes.grow }),
          _react2.default.createElement(_Button2.default, { onClick: this._handle_Close }, 'Cancel'),
          _react2.default.createElement(_Button2.default, { color: 'primary', onClick: this._handle_onClick_LogIn }, 'Log In'))));





  }

  renderInProgress() {
    const { classes, open } = this.props;
    const { UserAccount_Identifier } = this.state;

    return (
      _react2.default.createElement(_Dialog2.default, { classes: { paper: classes.dialogPaper }, open: open, onClose: this._handle_Close },
        _react2.default.createElement(_DialogTitle2.default, null, 'Logging in'),

        _react2.default.createElement(_DialogContent2.default, null,
          _react2.default.createElement(_Typography2.default, { component: 'p' }, 'Logging in as',

            _react2.default.createElement('span', { className: classes.userName }, UserAccount_Identifier), ' ...'),

          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_LinearProgress2.default, { mode: 'query' })),

        _react2.default.createElement(_DialogActions2.default, null,
          _react2.default.createElement(_Button2.default, { color: 'primary', onClick: this._handle_onCLick_CancelLogIn }, 'Cancel'))));





  }

  renderFailure() {
    const { classes, open } = this.props;
    const { UserAccount_Identifier, errorMessage } = this.state;

    return (
      _react2.default.createElement(_Dialog2.default, { classes: { paper: classes.dialogPaper }, open: open, onClose: this._handle_Close },
        _react2.default.createElement(_DialogTitle2.default, null, 'Log In Failed'),

        _react2.default.createElement(_DialogContent2.default, null,
          _react2.default.createElement(_Typography2.default, { component: 'p' }, 'Failed loggin in as',

            _react2.default.createElement('span', { className: classes.userName }, UserAccount_Identifier), ' because:', ' ',
            errorMessage, '!')),


        _react2.default.createElement(_DialogActions2.default, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_TryAgain }, 'Try Again'))));



  }

  render() {
    const { currentOperation } = this.state;

    return (
      _react2.default.createElement('div', null,
        currentOperation === 'challenge' && this.renderChallenge(),
        currentOperation === 'in progress' && this.renderInProgress(),
        currentOperation === 'failure' && this.renderFailure()));


  }}exports.default =


(0, _styles.withStyles)(styles)(LoginDialog);
//# sourceMappingURL=LoginDialog.js.map