'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _classnames = require('classnames');var _classnames2 = _interopRequireDefault(_classnames);
var _AppBar = require('material-ui/AppBar');var _AppBar2 = _interopRequireDefault(_AppBar);
var _Drawer = require('material-ui/Drawer');var _Drawer2 = _interopRequireDefault(_Drawer);
var _IconButton = require('material-ui/IconButton');var _IconButton2 = _interopRequireDefault(_IconButton);
var _styles = require('material-ui/styles');
var _Toolbar = require('material-ui/Toolbar');var _Toolbar2 = _interopRequireDefault(_Toolbar);
var _Typography = require('material-ui/Typography');var _Typography2 = _interopRequireDefault(_Typography);
var _ChevronLeft = require('material-ui-icons/ChevronLeft');var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);
var _KeyboardTab = require('material-ui-icons/KeyboardTab');var _KeyboardTab2 = _interopRequireDefault(_KeyboardTab);
var _Menu = require('material-ui-icons/Menu');var _Menu2 = _interopRequireDefault(_Menu);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _AppDrawerNavItems = require('../../_configuration/urb-appdrawer-webapp/AppDrawerNavItems');var _AppDrawerNavItems2 = _interopRequireDefault(_AppDrawerNavItems);
var _AppDrawerTitle = require('../../_configuration/urb-appdrawer-webapp/AppDrawerTitle');var _AppDrawerTitle2 = _interopRequireDefault(_AppDrawerTitle);
var _NavBarLoginButton = require('../../urb-account-management-webapp/components/NavBarLoginButton');var _NavBarLoginButton2 = _interopRequireDefault(_NavBarLoginButton);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
    position: 'absolute'
    // transition: theme.transitions.create([ 'margin', 'width' ], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
    // transition: theme.transitions.create([ 'margin', 'width' ], {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  grow: {
    flex: '1 1 auto' },

  menuButton: {
    marginLeft: 12,
    marginRight: 20 },

  hide: {
    display: 'none' },

  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth },

  drawerHeader: Object.assign({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px' },
  theme.mixins.toolbar),

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
        marginTop: 64 } } },



  contentShift: {
    marginLeft: 0
    // transition: theme.transitions.create( 'margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  } });


class AppFrame extends _react2.default.Component {




  constructor(props, context) {
    super(props, context);this.




    _handle_Drawer_Open = () => {
      this.setState({ drawerIsOpen: true });
    };this.
    _handle_Drawer_Pin = () => {
      this.setState({ drawerIsPinned: true });
    };this.

    _handle_Drawer_UnPin = () => {
      this.setState({ drawerIsOpen: false, drawerIsPinned: false });
    };this.

    _handle_Drawer_Close = () => {
      this.setState({ drawerIsOpen: false });
    };this.

    _handle_GoTo = to => {
      if (!this.state.drawerIsPinned) this.setState({ drawerIsOpen: false });

      this.context.router.push(to);
    };this.state = { drawerIsOpen: false, drawerIsPinned: false };}

  render() {
    const { children, classes, Viewer } = this.props;
    const { drawerIsOpen, drawerIsPinned } = this.state;

    const drawerType = drawerIsPinned ? 'persistent' : 'temporary';

    const drawerClasses = drawerIsPinned ?
    {
      paper: classes.drawerPaper } :

    {};

    return (
      _react2.default.createElement('div', { className: classes.root },
        _react2.default.createElement('div', { className: classes.appFrame },
          _react2.default.createElement(_AppBar2.default, { className: (0, _classnames2.default)(classes.appBar, drawerIsPinned && classes.appBarShift) },
            _react2.default.createElement(_Toolbar2.default, { disableGutters: !drawerIsPinned },
              _react2.default.createElement(_IconButton2.default, {
                  color: 'contrast',
                  'aria-label': 'open drawer',
                  onClick: this._handle_Drawer_Open,
                  className: (0, _classnames2.default)(classes.menuButton, drawerIsPinned && classes.hide) },

                _react2.default.createElement(_Menu2.default, null)),

              _react2.default.createElement(_Typography2.default, { className: classes.title, type: 'title', color: 'inherit', noWrap: true }, 'Rebar Factory'),



              _react2.default.createElement('div', { className: classes.grow }),
              _react2.default.createElement(_NavBarLoginButton2.default, { Viewer: Viewer }))),


          _react2.default.createElement(_Drawer2.default, {
              classes: drawerClasses,
              open: drawerIsOpen,
              onRequestClose: this._handle_Drawer_Close,
              type: drawerType,
              transitionDuration: {
                enter: drawerIsPinned ? 0 : 300,
                leave: 0 } },


            _react2.default.createElement('div', { className: classes.drawerInner },
              _react2.default.createElement('div', { className: classes.drawerHeader },
                _react2.default.createElement(_AppDrawerTitle2.default, null),
                _react2.default.createElement('div', { className: classes.grow }),
                drawerIsPinned &&
                _react2.default.createElement(_IconButton2.default, { onClick: this._handle_Drawer_UnPin },
                  _react2.default.createElement(_ChevronLeft2.default, null)),


                !drawerIsPinned &&
                _react2.default.createElement(_IconButton2.default, { onClick: this._handle_Drawer_Pin },
                  _react2.default.createElement(_KeyboardTab2.default, null)))),




            _react2.default.createElement(_AppDrawerNavItems2.default, { onClick: this._handle_GoTo })),

          _react2.default.createElement('main', { className: (0, _classnames2.default)(classes.content, drawerIsPinned && classes.contentShift) },
            children))));




  }}AppFrame.contextTypes = { router: _propTypes2.default.object.isRequired };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(AppFrame), { Viewer: function () {return require('./__generated__/AppFrame_Viewer.graphql');} });
//# sourceMappingURL=AppFrame.js.map