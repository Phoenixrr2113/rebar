'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _AppBar = require('@material-ui/core/AppBar');var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = require('@material-ui/core/Drawer');var _Drawer2 = _interopRequireDefault(_Drawer);

var _IconButton = require('@material-ui/core/IconButton');var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = require('@material-ui/core/styles');

var _Toolbar = require('@material-ui/core/Toolbar');var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@material-ui/core/Typography');var _Typography2 = _interopRequireDefault(_Typography);

var _Menu = require('@material-ui/icons/Menu');var _Menu2 = _interopRequireDefault(_Menu);

var _found = require('found');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _AppDrawerNavItems = require('../../_configuration/urb-appdrawer-webapp/AppDrawerNavItems');var _AppDrawerNavItems2 = _interopRequireDefault(_AppDrawerNavItems);
var _AppDrawerTitle = require('../../_configuration/urb-appdrawer-webapp/AppDrawerTitle');var _AppDrawerTitle2 = _interopRequireDefault(_AppDrawerTitle);
var _NavBarLoginButton = require('../../urb-account-management-webapp/components/NavBarLoginButton');var _NavBarLoginButton2 = _interopRequireDefault(_NavBarLoginButton);
var _NavBarTitle = require('../../_configuration/urb-appdrawer-webapp/NavBarTitle');var _NavBarTitle2 = _interopRequireDefault(_NavBarTitle);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

  drawerHeader: Object.assign({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px' },
  theme.mixins.toolbar),

  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth },

  content: {
    width: '100%',
    //marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen }),

    overflow: 'scroll',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64 } } } });





class AppFrame extends _react2.default.Component




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
    };this.state = { drawerIsOpen: false };}

  render() {
    const { children, classes, Viewer } = this.props;
    const { drawerIsOpen } = this.state;

    return (
      _react2.default.createElement('div', { className: classes.root },
        _react2.default.createElement('div', { className: classes.appFrame },
          _react2.default.createElement(_AppBar2.default, { className: classes.appBar },
            _react2.default.createElement(_Toolbar2.default, { disableGutters: true },
              _react2.default.createElement(_IconButton2.default, {
                  'aria-label': 'open drawer',
                  onClick: this._handle_Drawer_Open,
                  className: classes.menuButton,
                  classes: { root: classes.menuButtonRoot } },

                _react2.default.createElement(_Menu2.default, null)),

              _react2.default.createElement(_Typography2.default, { variant: 'title', color: 'inherit', noWrap: true },
                _NavBarTitle2.default),


              _react2.default.createElement('div', { className: classes.grow }),
              _react2.default.createElement(_NavBarLoginButton2.default, { Viewer: Viewer }))),


          _react2.default.createElement(_Drawer2.default, { open: drawerIsOpen, onClose: this._handle_Drawer_Close },
            _react2.default.createElement('div', { className: classes.drawerInner },
              _react2.default.createElement('div', { className: classes.drawerHeader },
                _react2.default.createElement(_AppDrawerTitle2.default, { handle_GoTo: this._handle_GoTo }))),


            _react2.default.createElement(_AppDrawerNavItems2.default, { onClick: this._handle_GoTo })),

          _react2.default.createElement('main', { className: classes.content }, children))));



  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)((0, _found.withRouter)(AppFrame)), { Viewer: function () {return require('./__generated__/AppFrame_Viewer.graphql');} });
//# sourceMappingURL=AppFrame.js.map