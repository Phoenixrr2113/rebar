"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _found = require("found");
var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _RequiresAuthentication = require("./RequiresAuthentication");



var _LoginDialog = _interopRequireDefault(require("./LoginDialog"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  buttonRoot: {
    color: '#ffffff' } });



class NavBarLoginButton extends _react.default.Component











{
  constructor(props, context) {
    super(props, context);this.

















    _handle_onClick_Login = () => {
      this.setState({ loginDialogIsOpen: true, userMenuIsOpen: false });
    };this.

    _handle_onClick_Profile = () => {
      this.setState({ userMenuIsOpen: false });
    };this.

    _handle_Login_Close = () => {
      this.setState({ loginDialogIsOpen: false });
    };this.

    _handle_onClick_UserMenu = event => {
      this.setState({ userMenuIsOpen: true, anchorEl: event.currentTarget });
    };this.

    _handle_UserMenu_Close = () => {
      this.setState({ userMenuIsOpen: false });
    };this.

    _handle_onClick_Logout = () => {
      this.setState({ userMenuIsOpen: false });
      this.props.router.push('/user/logout');
    };this.

    _handle_Login_NewUser = () => {
      this.setState({ loginDialogIsOpen: false });

      this.props.router.push('/user/new');
    };this.state = { anchorEl: undefined, loginDialogIsOpen: false, userMenuIsOpen: false };} // Handle popping open the login dialog if authentication is required
  UNSAFE_componentWillMount() {(0, _RequiresAuthentication.registerAuthenticationRequiredCallback)(this._handle_onClick_Login);}componentWillUnmount() {(0, _RequiresAuthentication.unregisterAuthenticationRequiredCallback)();}
  render() {
    const { classes } = this.props;
    const { User_IsAnonymous, User_DisplayName } = this.props.Viewer;
    const { loginDialogIsOpen, userMenuIsOpen } = this.state;

    return (
      _react.default.createElement("div", null,
      User_IsAnonymous &&
      _react.default.createElement(_Button.default, { classes: { root: classes.buttonRoot }, onClick: this._handle_onClick_Login }, "Login"),



      !User_IsAnonymous &&
      _react.default.createElement(_Button.default, { classes: { root: classes.buttonRoot }, onClick: this._handle_onClick_UserMenu },
      User_DisplayName),


      _react.default.createElement(_LoginDialog.default, {
        open: loginDialogIsOpen,
        handlerClose: this._handle_Login_Close,
        handlerNewUser: this._handle_Login_NewUser }),

      _react.default.createElement(_Menu.default, {
        id: "lock-menu",
        anchorEl: this.state.anchorEl,
        open: userMenuIsOpen,
        onClose: this._handle_UserMenu_Close },

      _react.default.createElement(_MenuItem.default, { key: "profile", onClick: this._handle_onClick_Profile }, "Profile"),


      _react.default.createElement(_MenuItem.default, { key: "login", onClick: this._handle_onClick_Login }, "Login as a different user"),


      _react.default.createElement(_MenuItem.default, { key: "logout", onClick: this._handle_onClick_Logout }, "Log out"))));





  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)((0, _found.withRouter)(NavBarLoginButton)), { Viewer: function () {return require("./__generated__/NavBarLoginButton_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=NavBarLoginButton.js.map