'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _path = require('path');var _path2 = _interopRequireDefault(_path);

var _createRender = require('found/lib/createRender');var _createRender2 = _interopRequireDefault(_createRender);
var _server = require('found/lib/server');
var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _reactHelmet = require('react-helmet');var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactJss = require('react-jss');
var _server2 = require('react-dom/server');var _server3 = _interopRequireDefault(_server2);
var _serializeJavascript = require('serialize-javascript');var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _ErrorComponent = require('../_configuration/urb-base-webapp/ErrorComponent');var _ErrorComponent2 = _interopRequireDefault(_ErrorComponent);
var _getGraphQLLocalServerURL = require('../_configuration/urb-base-server/getGraphQLLocalServerURL');var _getGraphQLLocalServerURL2 = _interopRequireDefault(_getGraphQLLocalServerURL);
var _siteSettings = require('../_configuration/urb-base-server/siteSettings');
var _log = require('../urb-base-server/log');var _log2 = _interopRequireDefault(_log);
var _package = require('../_configuration/package');
var _UserToken2ServerRendering = require('../_configuration/urb-base-server/UserToken2ServerRendering');var _UserToken2ServerRendering2 = _interopRequireDefault(_UserToken2ServerRendering);
var _AppWrapper = require('../_configuration/urb-base-webapp/AppWrapper');var _AppWrapper2 = _interopRequireDefault(_AppWrapper);
var _htmlHeadAdditions = require('../_configuration/urb-base-webapp/htmlHeadAdditions');var _htmlHeadAdditions2 = _interopRequireDefault(_htmlHeadAdditions);

var _fetcherServer = require('./fetcherServer');var _fetcherServer2 = _interopRequireDefault(_fetcherServer);
var _router = require('./router');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

const envHost = process.env.HOST;
if (envHost == null || typeof envHost !== 'string')
throw new Error('Error: urb-base-webapp requires the environment variable HOST to be set');

const envPort = process.env.PORT;
if (envPort == null || typeof envPort !== 'string')
throw new Error('Error: urb-base-webapp requires the environment variable PORT to be set');

// Create express router for the web app
const serverWebApp = (0, _express2.default)();

async function gatherLocationAndSiteInformation(req, res) {
  let assetsPath;
  const siteInformation = await (0, _siteSettings.getSiteInformation)(req, res);

  if (process.env.NODE_ENV === 'production') {
    assetsPath =
    siteInformation.isCfMakerDisabled || siteInformation.inEditingMode ?
    // When editing in production, use the assets with the configuration readign code intact (built when cutting a site version)
    `/assets/${_package.version}` :
    // When in production mode, serve the assets compiled by maker
    `/sassets/${_package.version}.${siteInformation.siteConfiguration.version}`;
  } else {
    // Get webpack port only in development. In production it can be omitted
    const envPortWebpack = process.env.PORT_WEBPACK;
    if (envPortWebpack == null || typeof envPortWebpack !== 'string')
    throw new Error(
    'Error: urb-base-webapp requires the environment variable PORT_WEBPACK to be set');


    // When in development, always go to webpack over http
    assetsPath = `http://${envHost}:${envPortWebpack}/${_package.version}`;
  }

  return { siteInformation, assetsPath };
}

const render = (0, _createRender2.default)({
  renderError(obj) {
    const { error } = obj;
    if (error.status !== 404)
    _log2.default.log('error', 'Error: Render on server createRender renderError', obj);
    return _react2.default.createElement(_ErrorComponent2.default, { httpStatus: error.status });
  } });


serverWebApp.use(async (req, res) => {
  try {
    const { siteInformation, assetsPath } = await gatherLocationAndSiteInformation(req, res);

    // It is possible that artifact_id can not be determined during development. For instance, when browsing
    // the project on localhost using a specific port, Chrome will request robots.txt and favicon.ico and
    // they will not have the proper dev-host header. In this case simply report the file missing.
    // This does not affect operation in production, since host will be passed for all requests.
    if (!siteInformation) {
      res.status(404);
      return;
    }

    const fetcher = new _fetcherServer2.default(
    `http://localhost:${envPort}` + (0, _getGraphQLLocalServerURL2.default)(siteInformation),
    req.cookies.UserToken1,
    _UserToken2ServerRendering2.default);


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

    const relayPayload = (0, _serializeJavascript2.default)(fetcher, { isJSON: true });

    const sheets = new _reactJss.SheetsRegistry();
    const helmet = _reactHelmet2.default.rewind();

    const rootHTML = _server3.default.renderToString(
    _react2.default.createElement(_reactJss.JssProvider, { registry: sheets },
      _react2.default.createElement(_AppWrapper2.default, { userAgent: userAgent, siteConfiguration: siteConfigurationSubset, url: req.url },
        element)));




    res.render(_path2.default.resolve(__dirname, 'html.ejs'), {
      assets_path: assetsPath,
      root_html: rootHTML,
      server_side_styles: sheets.toString(),
      helmet,
      htmlHeadAdditions: _htmlHeadAdditions2.default,
      siteConfiguration: JSON.stringify(siteConfigurationSubset),
      relay_payload: relayPayload });

  } catch (err) {
    _log2.default.log('error', 'Error: Render on server request', err);
    res.status(500).send(_server3.default.renderToString(_react2.default.createElement(_ErrorComponent2.default, { httpStatus: 500 })));
  }
});exports.default =
serverWebApp;
//# sourceMappingURL=serverWebApp.js.map