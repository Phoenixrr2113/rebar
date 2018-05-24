'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('@material-ui/core/Card');var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardHeader = require('@material-ui/core/CardHeader');var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _styles = require('@material-ui/core/styles');

var _Table = require('@material-ui/core/Table');var _Table2 = _interopRequireDefault(_Table);

var _TableBody = require('@material-ui/core/TableBody');var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('@material-ui/core/TableCell');var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = require('@material-ui/core/TableHead');var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = require('@material-ui/core/TableRow');var _TableRow2 = _interopRequireDefault(_TableRow);

var _Typography = require('@material-ui/core/Typography');var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  card: {
    minWidth: 275 } };



class HomePageScreen extends _react2.default.Component


{




  render() {
    const { classes } = this.props;

    const data = [
    { name: 'Rebar Version', value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.version },
    { name: 'Server OS', value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.OSType },
    {
      name: 'Server Host Name',
      value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.OSHostName },

    {
      name: 'Server Free Memory',
      value: this.context.rbCtx.siteConfiguration.webapp.urbDemo.OSFreeMem },

    {
      name: 'Google Maps API Key',
      value: this.context.rbCtx.siteConfiguration.webapp.api.googleMapsJavascriptAPI }];



    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_CardHeader2.default, { title: 'Universal Relay Boilerplate Demo' }),
          _react2.default.createElement(_CardContent2.default, null,
            _react2.default.createElement(_Typography2.default, { component: 'p' }, 'The',
              ' ',
              _react2.default.createElement('a', { href: 'http://codefoundries.com/products/UniversalRelayBoilerplate.html' }, 'Universal Relay Boilerplate'),

              ' ', 'is and open source project representing basic foundation of the solutions we provide. It fully utilizes the react stack, and Node.js and Cassandra on the back end. It can be used both as boilerplate, as well as an educational tool with multiple examples available. Basic user account management including account creation, password strength indicator and user profile is also included. The boilerplate is optimized for supportability and update-ability. It allows us to update the multiple projects based on the boilerplate with minimum effort, providing new features, improvements and bug fixes. This is achieved through the following two approaches:',








              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null)),

            _react2.default.createElement(_Typography2.default, { component: 'ul' },
              _react2.default.createElement('li', null,
                _react2.default.createElement('b', null, 'Configurability'), ' - All the configuration files, which include settings, CQL, JSON, snippets of JavaScript and JSX are separated from the common code.'),


              _react2.default.createElement('li', null,
                _react2.default.createElement('b', null, 'Modularity'), ' - The applications built upon the boilerplate are separated into semi-independent units, which contain the necessary front-end, back end, relay, CQL, etc. code. The parameters and settings for those units are stored in the configuration folder for eacy updating.')))),







        _react2.default.createElement('br', null),
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_CardHeader2.default, { title: 'Site Configuration' }),
          _react2.default.createElement(_CardContent2.default, null,
            _react2.default.createElement(_Typography2.default, { component: 'p' }, 'These settings are derived from ',
              _react2.default.createElement('b', null, '_configuration/urb-base-server/siteSettings.js'), '.'),

            _react2.default.createElement(_Table2.default, null,
              _react2.default.createElement(_TableHead2.default, null,
                _react2.default.createElement(_TableRow2.default, null,
                  _react2.default.createElement(_TableCell2.default, null, 'Property'),
                  _react2.default.createElement(_TableCell2.default, { numeric: true }, 'Value'))),


              _react2.default.createElement(_TableBody2.default, null,
                data.map(n => {
                  return (
                    _react2.default.createElement(_TableRow2.default, { key: n.name },
                      _react2.default.createElement(_TableCell2.default, null, n.name),
                      _react2.default.createElement(_TableCell2.default, { numeric: true }, n.value)));


                })))))));






  }}HomePageScreen.contextTypes = { rbCtx: _propTypes2.default.object };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(HomePageScreen), { Viewer: function () {return require('./__generated__/HomePageScreen_Viewer.graphql');} });
//# sourceMappingURL=HomePageScreen.js.map