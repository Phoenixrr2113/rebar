'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('@material-ui/core/Card');var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardHeader = require('@material-ui/core/CardHeader');var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _styles = require('@material-ui/core/styles');

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactGoogleMaps = require('react-google-maps');
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-appbase-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);
var _SiteConfigurationContext = require('../../urb-appbase-webapp/components/SiteConfigurationContext');var _SiteConfigurationContext2 = _interopRequireDefault(_SiteConfigurationContext);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const MapComponent = (0, _reactGoogleMaps.withScriptjs)(
(0, _reactGoogleMaps.withGoogleMap)(props =>
_react2.default.createElement(_reactGoogleMaps.GoogleMap, { defaultZoom: props.defaultZoom, center: props.center },
  props.markers.map((marker, index) => _react2.default.createElement(_reactGoogleMaps.Marker, { key: index, position: marker.position })))));




const styles = {
  card: {
    minWidth: 275,
    minHeight: 400 } };



class InscriptioScreen extends _react2.default.Component {
  constructor(props, context) {
    super(props, context);this.










    isUnmounted = false;this.state = { center: { lat: 34.0522, lng: -118.243 }, markers: [] };}

  render() {
    const { classes } = this.props;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_CardHeader2.default, { title: 'Inscriptio' }),
          _react2.default.createElement(_CardContent2.default, null,
            _react2.default.createElement(_SiteConfigurationContext2.default.Consumer, null,
              siteConfiguration => {
                // $AssureFlow
                const googleMapURL = siteConfiguration.webapp.api.googleMapsJavascriptAPI;
                return (
                  _react2.default.createElement(MapComponent, {
                    defaultZoom: 16,
                    center: this.state.center,
                    content: 'Content here',
                    googleMapURL: googleMapURL,
                    markers: this.state.markers,
                    loadingElement: _react2.default.createElement('div', null, 'Loading...'),
                    containerElement: _react2.default.createElement('div', { style: { height: 400 } }),
                    mapElement: _react2.default.createElement('div', { style: { height: 400 } }) }));


              })))));





  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(InscriptioScreen), { Viewer: function () {return require('./__generated__/InscriptioScreen_Viewer.graphql');} });
//# sourceMappingURL=InscriptioScreen.js.map