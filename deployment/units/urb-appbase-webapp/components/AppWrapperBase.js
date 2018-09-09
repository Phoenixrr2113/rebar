'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _MuiThemeProvider = require('@material-ui/core/styles/MuiThemeProvider');var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactEventListener = require('react-event-listener');var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _SiteConfigurationContext = require('./SiteConfigurationContext');var _SiteConfigurationContext2 = _interopRequireDefault(_SiteConfigurationContext);
var _ViewportContext = require('./ViewportContext');var _ViewportContext2 = _interopRequireDefault(_ViewportContext);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class AppWrapperBase extends _react2.default.Component






{
  constructor(props, context) {
    super(props, context);this.













    handle_onResize = () => {
      const totalWidth = window.innerWidth;
      const totalHeight = window.innerHeight;

      this.setState({ totalWidth, totalHeight });
    };this.state = { totalWidth: 100, totalHeight: 100 };}componentDidMount() {this.handle_onResize(); // Will populate the data structures for dimensions with current values
  } // This should be overridden in AppDrawer
  createMUITheme() {return null;}render() {
    const { totalWidth, totalHeight } = this.state;

    return (
      _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handle_onResize },
        _react2.default.createElement(_MuiThemeProvider2.default, { theme: this.createMUITheme() },
          _react2.default.createElement(_ViewportContext2.default.Provider, { value: { totalWidth, totalHeight } },
            _react2.default.createElement(_SiteConfigurationContext2.default.Provider, { value: this.props.siteConfiguration },
              this.props.children)))));





  }}exports.default = AppWrapperBase;
//# sourceMappingURL=AppWrapperBase.js.map