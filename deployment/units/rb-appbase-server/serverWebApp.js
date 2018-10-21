"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _createRender = _interopRequireDefault(require("found/lib/createRender"));
var _server = require("found/lib/server");
var _express = _interopRequireDefault(require("express"));
var _reactHelmet = _interopRequireDefault(require("react-helmet"));
var _react = _interopRequireDefault(require("react"));
var _reactJss = require("react-jss");
var _server2 = _interopRequireDefault(require("react-dom/server"));
var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _AppWrapper = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/AppWrapper"));
var _ErrorComponent = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/ErrorComponent"));
var _getGraphQLLocalServerURL = _interopRequireDefault(require("../_configuration/rb-base-server/getGraphQLLocalServerURL"));
var _siteSettings = require("../_configuration/rb-base-server/siteSettings");
var _log = _interopRequireDefault(require("../rb-base-server/log"));
var _package = require("../../package.json");
var _UserToken2ServerRendering = _interopRequireDefault(require("../_configuration/rb-base-server/UserToken2ServerRendering"));
var _htmlHeadAdditions = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/htmlHeadAdditions"));

var _router = require("../rb-appbase-webapp/router");

var _fetcherServer = _interopRequireDefault(require("./fetcherServer"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

const envHost = process.env.HOST;
if (envHost == null || typeof envHost !== 'string')
throw new Error('Error: rb-appbase-webapp requires the environment variable HOST to be set');

const envPort = process.env.PORT;
if (envPort == null || typeof envPort !== 'string')
throw new Error('Error: rb-appbase-webapp requires the environment variable PORT to be set');

// Create express router for the web app
const serverWebApp = (0, _express.default)();

async function gatherLocationAndSiteInformation(
req,
res)
{
  let assetsPath;
  const siteInformation = await (0, _siteSettings.getSiteInformation)(req, res);
  if (siteInformation) {
    if (process.env.NODE_ENV === 'production') {
      assetsPath =
      siteInformation.isMaDesignerDisabled || siteInformation.inEditingMode ?
      // When editing in production, use the assets with the configuration readign code intact (built when cutting a site version)
      `/assets/${_package.version}` :
      // When in production mode, serve the assets compiled by designer
      `/sassets/${_package.version}.${siteInformation.siteConfiguration.version}`;
    } else {
      // Get webpack port only in development. In production it can be omitted
      const envPortWebpack = process.env.PORT_WEBPACK;
      if (envPortWebpack == null || typeof envPortWebpack !== 'string')
      throw new Error(
      'Error: rb-appbase-webapp requires the environment variable PORT_WEBPACK to be set');


      // When in development, always go to webpack over http
      assetsPath = `http://${envHost}:${envPortWebpack}/${_package.version}`;
    }

    return { siteInformation, assetsPath };
  } else return null;
}

const render = (0, _createRender.default)({
  renderError(obj) {
    const { error } = obj;
    if (error.status !== 404)
    _log.default.log({
      level: 'error',
      message: 'Error: Render on server createRender renderError',
      details: obj });

    return _react.default.createElement(_ErrorComponent.default, { httpStatus: error.status });
  } });


serverWebApp.use(async (req, res) => {
  try {
    const siteInformationAndAssets = await gatherLocationAndSiteInformation(req, res);
    if (siteInformationAndAssets) {
      const { siteInformation, assetsPath } = siteInformationAndAssets;

      // It is possible that artifact_id can not be determined during development. For instance, when browsing
      // the project on localhost using a specific port, Chrome will request robots.txt and favicon.ico and
      // they will not have the proper dev-host header. In this case simply report the file missing.
      // This does not affect operation in production, since host will be passed for all requests.
      if (!siteInformation) {
        res.status(404);
        return;
      }

      const fetcher = new _fetcherServer.default(
      `http://${envHost}:${envPort}` + (0, _getGraphQLLocalServerURL.default)(siteInformation),
      req.cookies.UserToken1,
      _UserToken2ServerRendering.default);


      const userAgent = req.headers['user-agent'];
      const { siteConfiguration } = siteInformation;
      const siteConfigurationSubset = {
        webapp: siteConfiguration.webapp,
        builder: siteConfiguration.builder };


      const siteRouteConfig = (0, _router.routeConfig)(siteConfigurationSubset);

      const { redirect, element } = await (0, _server.getFarceResult)({
        url: req.url,
        historyMiddlewares: _router.historyMiddlewares,
        routeConfig: siteRouteConfig,
        resolver: (0, _router.createResolver)(fetcher),
        render });


      if (redirect) {
        res.redirect(302, redirect.url);
        return;
      }

      const relayPayload = (0, _serializeJavascript.default)(fetcher, { isJSON: true });

      const sheets = new _reactJss.SheetsRegistry();
      const helmet = _reactHelmet.default.rewind();

      const rootHTML = _server2.default.renderToString(
      _react.default.createElement(_reactJss.JssProvider, { registry: sheets },
      _react.default.createElement(_AppWrapper.default, {
        userAgent: userAgent,
        siteConfiguration: siteConfigurationSubset,
        url: req.url },

      element)));




      res.render(_path.default.resolve(__dirname, 'html.ejs'), {
        assets_path: assetsPath,
        root_html: rootHTML,
        server_side_styles: sheets.toString(),
        helmet,
        htmlHeadAdditions: _htmlHeadAdditions.default,
        siteConfiguration: JSON.stringify(siteConfigurationSubset),
        relay_payload: relayPayload });

    } else {
      res.status(200).send('meh');
    }
  } catch (err) {
    _log.default.log({ level: 'error', message: 'Error: Render on server request', details: err });
    res.status(500).send(_server2.default.renderToString(_react.default.createElement(_ErrorComponent.default, { httpStatus: 500 })));
  }
});var _default =
serverWebApp;exports.default = _default;
//# sourceMappingURL=serverWebApp.js.map