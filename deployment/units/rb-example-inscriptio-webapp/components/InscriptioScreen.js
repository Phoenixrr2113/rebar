"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));
var _reactGoogleMaps = require("react-google-maps");
var _reactRelay = require("react-relay");

var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));
var _SiteConfigurationContext = _interopRequireDefault(require("../../rb-appbase-webapp/components/SiteConfigurationContext"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const MapComponent = (0, _reactGoogleMaps.withScriptjs)(
(0, _reactGoogleMaps.withGoogleMap)(props =>
_react.default.createElement(_reactGoogleMaps.GoogleMap, { defaultZoom: props.defaultZoom, center: props.center },
props.markers.map((marker, index) =>
_react.default.createElement(_reactGoogleMaps.Marker, { key: index, position: marker.position })))));





const styles = {
  card: {
    minWidth: 275,
    minHeight: 400 } };



class InscriptioScreen extends _react.default.Component {
  constructor(props, context) {
    super(props, context);this.










    isUnmounted = false;this.state = { center: { lat: 34.0522, lng: -118.243 }, markers: [] };}

  render() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Inscriptio" }),
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_SiteConfigurationContext.default.Consumer, null,
      siteConfiguration => {
        // $AssureFlow
        const googleMapURL = siteConfiguration.webapp.api.googleMapsJavascriptAPI;
        return (
          _react.default.createElement(MapComponent, {
            defaultZoom: 16,
            center: this.state.center,
            content: "Content here",
            googleMapURL: googleMapURL,
            markers: this.state.markers,
            loadingElement: _react.default.createElement("div", null, "Loading..."),
            containerElement: _react.default.createElement("div", { style: { height: 400 } }),
            mapElement: _react.default.createElement("div", { style: { height: 400 } }) }));


      })))));





  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(InscriptioScreen), { Viewer: function () {return require("./__generated__/InscriptioScreen_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=InscriptioScreen.js.map