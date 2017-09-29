'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _styles = require('material-ui/styles');
var _Table = require('material-ui/Table');var _Table2 = _interopRequireDefault(_Table);
var _Typography = require('material-ui/Typography');var _Typography2 = _interopRequireDefault(_Typography);
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
          _react2.default.createElement(_Card.CardHeader, { title: 'Universal Relay Boilerplate Demo' }),
          _react2.default.createElement(_Card.CardContent, null,
            _react2.default.createElement(_Typography2.default, { component: 'p' }, 'The',
              ' ',
              _react2.default.createElement('a', { href: 'http://codefoundries.com/products/UniversalRelayBoilerplate.html' }, 'Universal Relay Boilerplate'),

              ' ', 'is and open source project representing basic foundation of the solutions we provide. It fully utilizes the react stack, and Node.js and Cassandra on the back end. It can be used both as boilerplate, as well as an educational tool with multiple examples available. Basic user account management including account creation, password strength indicator and user profile is also included. The boilerplate is optimized for supportability and update-ability. It allows us to update the multiple projects based on the boilerplate with minimum effort, providing new features, improvements and bug fixes. This is achieved through the following two approaches:',








              _react2.default.createElement('ul', null,
                _react2.default.createElement('li', null,
                  _react2.default.createElement('b', null, 'Configurability'), ' - All the configuration files, which include settings, CQL, JSON, snippets of JavaScript and JSX are separated from the common code.'),


                _react2.default.createElement('li', null,
                  _react2.default.createElement('b', null, 'Modularity'), ' - The applications built upon the boilerplate are separated into semi-independent units, which contain the necessary front-end, back end, relay, CQL, etc. code. The parameters and settings for those units are stored in the configuration folder for eacy updating.'))))),








        _react2.default.createElement('br', null),
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_Card.CardHeader, { title: 'Site Configuration' }),
          _react2.default.createElement(_Card.CardContent, null,
            _react2.default.createElement(_Typography2.default, { component: 'p' }, 'These settings are derived from ',
              _react2.default.createElement('b', null, '_configuration/urb-base-server/siteSettings.js'), '.'),

            _react2.default.createElement(_Table2.default, null,
              _react2.default.createElement(_Table.TableHead, null,
                _react2.default.createElement(_Table.TableRow, null,
                  _react2.default.createElement(_Table.TableCell, null, 'Property'),
                  _react2.default.createElement(_Table.TableCell, { numeric: true }, 'Value'))),


              _react2.default.createElement(_Table.TableBody, null,
                data.map(n => {
                  return (
                    _react2.default.createElement(_Table.TableRow, { key: n.name },
                      _react2.default.createElement(_Table.TableCell, null, n.name),
                      _react2.default.createElement(_Table.TableCell, { numeric: true }, n.value)));


                })))))));






  }}HomePageScreen.contextTypes = { rbCtx: _propTypes2.default.object };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(HomePageScreen), { Viewer: function () {return require('./__generated__/HomePageScreen_Viewer.graphql');} });
//# sourceMappingURL=HomePageScreen.js.map