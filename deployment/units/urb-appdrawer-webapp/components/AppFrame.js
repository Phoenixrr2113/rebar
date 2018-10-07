"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _styles = require("@material-ui/core/styles");

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _found = require("found");
var _react = _interopRequireDefault(require("react"));
var _reactHelmet = require("react-helmet");
var _reactRelay = require("react-relay");

var _AppDrawerNavItems = _interopRequireDefault(require("../../_configuration/urb-appdrawer-webapp/AppDrawerNavItems"));
var _AppDrawerTitle = _interopRequireDefault(require("../../_configuration/urb-appdrawer-webapp/AppDrawerTitle"));
var _NavBarLoginButton = _interopRequireDefault(require("../../urb-account-management-webapp/components/NavBarLoginButton"));
var _NavBarDefaultTitle = _interopRequireDefault(require("../../_configuration/urb-appdrawer-webapp/NavBarDefaultTitle"));

var _AppFrameContext = _interopRequireDefault(require("./AppFrameContext"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const drawerWidth = 240;

const styles = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box' },

    '*, *:before, *:after': {
      boxSizing: 'inherit' },

    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale' // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto' } },


  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden' },

  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%' },

  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen }) },


  grow: {
    flex: '1 1 auto' },

  menuButton: {
    marginLeft: 12,
    marginRight: 20 },

  menuButtonRoot: {
    color: '#ffffff' },

  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    ...theme.mixins.toolbar },

  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth },

  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen }),

    overflow: 'scroll',
    height: 'calc(100% - 56px)',
    marginTop: 56 } });



const titlePrefix = process.env.NODE_ENV === 'production' ? '' : '<DEV> ';

class AppFrame extends _react.default.Component





{
  constructor(props, context) {
    super(props, context);this.




    _handle_Drawer_Open = () => {
      this.setState({ drawerIsOpen: true });
    };this.

    _handle_Drawer_Close = () => {
      this.setState({ drawerIsOpen: false });
    };this.

    _handle_GoTo = to => {
      this.setState({ drawerIsOpen: false });

      this.props.router.push(to);
    };this.

    setTitle = title => {
      this.setState({ title: titlePrefix + title });
    };this.

    clearTitle = () => {
      this.setState({ title: titlePrefix + _NavBarDefaultTitle.default });
    };this.state = { drawerIsOpen: false, title: titlePrefix + _NavBarDefaultTitle.default };}

  render() {
    const { setTitle, clearTitle } = this;
    const { children, classes, Viewer } = this.props;
    const { drawerIsOpen, title } = this.state;

    return (
      _react.default.createElement("div", { className: classes.root },
      _react.default.createElement(_reactHelmet.Helmet, null,
      _react.default.createElement("title", null, title)),


      _react.default.createElement("div", { className: classes.appFrame },
      _react.default.createElement(_AppBar.default, { className: classes.appBar },
      _react.default.createElement(_Toolbar.default, { disableGutters: true, variant: "dense" },
      _react.default.createElement(_IconButton.default, {
        "aria-label": "open drawer",
        onClick: this._handle_Drawer_Open,
        className: classes.menuButton,
        classes: { root: classes.menuButtonRoot } },

      _react.default.createElement(_Menu.default, null)),


      _react.default.createElement(_Typography.default, { variant: "title", color: "inherit", noWrap: true },
      title),


      _react.default.createElement("div", { className: classes.grow }),

      _react.default.createElement(_NavBarLoginButton.default, { Viewer: Viewer }))),



      _react.default.createElement(_Drawer.default, { open: drawerIsOpen, onClose: this._handle_Drawer_Close },
      _react.default.createElement("div", { className: classes.drawerInner },
      _react.default.createElement("div", { className: classes.drawerHeader },
      _react.default.createElement(_AppDrawerTitle.default, { handle_GoTo: this._handle_GoTo }))),


      _react.default.createElement(_AppDrawerNavItems.default, { onClick: this._handle_GoTo })),


      _react.default.createElement(_AppFrameContext.default.Provider, { value: { setTitle, clearTitle } },
      _react.default.createElement("main", { className: classes.content }, children)))));




  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)((0, _found.withRouter)(AppFrame)), { Viewer: function () {return require("./__generated__/AppFrame_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=AppFrame.js.map