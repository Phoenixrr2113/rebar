"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _styles = require("@material-ui/core/styles");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _ResponsiveContentArea = _interopRequireDefault(require("../../urb-appbase-webapp/components/ResponsiveContentArea"));
var _SiteConfigurationContext = _interopRequireDefault(require("../../urb-appbase-webapp/components/SiteConfigurationContext"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  card: {
    minWidth: 275 } };



class HomePageScreen extends _react.default.Component


{
  render() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_SiteConfigurationContext.default.Consumer, null,
      siteConfiguration => {
        const data = [
        {
          name: 'Rebar Version',
          // $AssureFlow
          value: siteConfiguration.webapp.urbDemo.version },

        {
          name: 'Server OS',
          // $AssureFlow
          value: siteConfiguration.webapp.urbDemo.OSType },

        {
          name: 'Server Host Name',
          // $AssureFlow
          value: siteConfiguration.webapp.urbDemo.OSHostName },

        {
          name: 'Server Free Memory',
          // $AssureFlow
          value: siteConfiguration.webapp.urbDemo.OSFreeMem },

        {
          name: 'Google Maps API Key',
          // $AssureFlow
          value: siteConfiguration.webapp.api.googleMapsJavascriptAPI }];



        return (
          _react.default.createElement(_ResponsiveContentArea.default, null,
          _react.default.createElement(_Card.default, { className: classes.card },
          _react.default.createElement(_CardHeader.default, { title: "Universal Relay Boilerplate Demo" }),
          _react.default.createElement(_CardContent.default, null,
          _react.default.createElement(_Typography.default, { component: "p" }, "The",
          ' ',
          _react.default.createElement("a", { href: "http://codefoundries.com/products/UniversalRelayBoilerplate.html" }, "Universal Relay Boilerplate"),

          ' ', "is and open source project representing basic foundation of the solutions we provide. It fully utilizes the react stack, and Node.js and Cassandra on the back end. It can be used both as boilerplate, as well as an educational tool with multiple examples available. Basic user account management including account creation, password strength indicator and user profile is also included. The boilerplate is optimized for supportability and update-ability. It allows us to update the multiple projects based on the boilerplate with minimum effort, providing new features, improvements and bug fixes. This is achieved through the following two approaches:",









          _react.default.createElement("br", null),
          _react.default.createElement("br", null)),

          _react.default.createElement(_Typography.default, { component: "ul" },
          _react.default.createElement("li", null,
          _react.default.createElement("b", null, "Configurability"), " - All the configuration files, which include settings, CQL, JSON, snippets of JavaScript and JSX are separated from the common code."),


          _react.default.createElement("li", null,
          _react.default.createElement("b", null, "Modularity"), " - The applications built upon the boilerplate are separated into semi-independent units, which contain the necessary front-end, back end, relay, CQL, etc. code. The parameters and settings for those units are stored in the configuration folder for eacy updating.")))),







          _react.default.createElement("br", null),
          _react.default.createElement(_Card.default, { className: classes.card },
          _react.default.createElement(_CardHeader.default, { title: "Site Configuration" }),
          _react.default.createElement(_CardContent.default, null,
          _react.default.createElement(_Typography.default, { component: "p" }, "These settings are derived from",
          ' ',
          _react.default.createElement("b", null, "_configuration/urb-base-server/siteSettings.js"), "."),

          _react.default.createElement(_Table.default, null,
          _react.default.createElement(_TableHead.default, null,
          _react.default.createElement(_TableRow.default, null,
          _react.default.createElement(_TableCell.default, null, "Property"),
          _react.default.createElement(_TableCell.default, { numeric: true }, "Value"))),


          _react.default.createElement(_TableBody.default, null,
          data.map(n => {
            return (
              _react.default.createElement(_TableRow.default, { key: n.name },
              _react.default.createElement(_TableCell.default, null, n.name),
              _react.default.createElement(_TableCell.default, { numeric: true }, n.value)));


          })))))));






      }));


  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(HomePageScreen), { Viewer: function () {return require("./__generated__/HomePageScreen_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=HomePageScreen.js.map