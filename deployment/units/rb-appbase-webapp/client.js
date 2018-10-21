"use strict";


require("babel-polyfill");

var _BrowserProtocol = _interopRequireDefault(require("farce/lib/BrowserProtocol"));
var _createInitialFarceRouter = _interopRequireDefault(require("found/lib/createInitialFarceRouter"));
var _createRender = _interopRequireDefault(require("found/lib/createRender"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));

var _getGraphQLServerURL = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/getGraphQLServerURL"));
var _AppWrapper = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/AppWrapper"));

var _fetcherClient = _interopRequireDefault(require("./fetcherClient"));
var _router = require("./router");


require("../_configuration/rb-appbase-webapp/global.css");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // In order to use ES7 async/await
// Include global CSS used in all units. Will not be chunked
const render = (0, _createRender.default)({})

//
;(async () => {
  // eslint-disable-next-line no-underscore-dangle
  const fetcher = new _fetcherClient.default(
  (0, _getGraphQLServerURL.default)(),
  window.__RELAY_PAYLOADS__,
  window.__RELAY_PAYLOADS__[0].data.Viewer.UserToken2);

  const resolver = (0, _router.createResolver)(fetcher);

  const Router = await (0, _createInitialFarceRouter.default)({
    historyProtocol: new _BrowserProtocol.default(),
    historyMiddlewares: _router.historyMiddlewares,
    routeConfig: (0, _router.routeConfig)(window.__siteConfiguration__),
    resolver,
    render });


  _reactDom.default.hydrate(
  _react.default.createElement(_AppWrapper.default, { siteConfiguration: window.__siteConfiguration__, url: document.location.href },
  _react.default.createElement(Router, { resolver: resolver })),


  // $AssureFlow
  document.getElementById('root'),
  () => {
    // TODO [2 Crossroads][Designer][webapp] Research if removal of styles if necessary
    // Previous version of react required removing of JSS styles but the new one seems to handle
    // them OK.
    // // We don't need the static css any more once we have launched our application.
    // const ssStyles = document.getElementById( 'server-side-styles' )
    // ssStyles.parentNode.removeChild( ssStyles )
  });

})();
//# sourceMappingURL=client.js.map