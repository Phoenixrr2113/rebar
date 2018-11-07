"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));

var _ejs = _interopRequireDefault(require("ejs"));
var _createRender = _interopRequireDefault(require("found/lib/createRender"));
var _server = require("found/lib/server");
var _nestedErrorStacks = _interopRequireDefault(require("nested-error-stacks"));
var _react = _interopRequireDefault(require("react"));
var _server2 = _interopRequireDefault(require("react-dom/server"));
var _reactJss = require("react-jss");
var _reactHelmet = _interopRequireDefault(require("react-helmet"));
var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _AppWrapper = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/AppWrapper"));
var _ErrorComponent = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/ErrorComponent"));
var _getGraphQLLocalServerURL = _interopRequireDefault(require("../_configuration/rb-base-server/getGraphQLLocalServerURL"));
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

//

// HTML page template
var htmlEjs = _ejs.default.compile(_fs.default.readFileSync(_path.default.resolve(__dirname, 'html.ejs'), 'utf8'));

//

function getAssetsPath(siteInformation) {
  if (process.env.NODE_ENV === 'production') {
    // For when per-site assets are created
    /*
    const assetsPath =
      siteInformation.isMaDesignerDisabled || siteInformation.inEditingMode
        ? // When editing in production, use the assets with the configuration readign code intact (built when cutting a site version)
          `/assets/${version}`
        : // When in production mode, serve the assets compiled by designer
          `/sassets/${version}.${siteInformation.siteConfiguration.metadata.version}`
    */

    // If public URL is available in site configuration, prefix the assets with the public URL
    let assetsPathPrefix = '';
    if (
    siteInformation.siteConfiguration.webapp &&
    siteInformation.siteConfiguration.webapp.publicURL)
    {
      assetsPathPrefix = siteInformation.siteConfiguration.webapp.publicURL;
    }

    // Asset path is versioned
    const assetsPath = assetsPathPrefix + `/assets/${_package.version}`;
    return assetsPath;
  } else {
    // Get webpack port only in development. In production it can be omitted
    const envPortWebpack = process.env.PORT_WEBPACK;
    if (envPortWebpack == null || typeof envPortWebpack !== 'string')
    throw new Error(
    'Error: rb-appbase-webapp requires the environment variable PORT_WEBPACK to be set');


    // When in development, always go to webpack over http
    return `http://${envHost}:${envPortWebpack}/${_package.version}`;
  }
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
  } });var


contentCreatorWebApp_async = async function contentCreatorWebApp_async(
siteInformation,
reqUrl,
reqUserAgent,
reqUserToken1)
{
  try {
    const assetsPath = getAssetsPath(siteInformation);

    // It is possible that artifact_id can not be determined during development. For instance, when browsing
    // the project on localhost using a specific port, Chrome will request robots.txt and favicon.ico and
    // they will not have the proper dev-host header. In this case simply report the file missing.
    // This does not affect operation in production, since host will be passed for all requests.
    if (!siteInformation) {
      return { status: 404 };
    }

    // If public URL is available in site configuration, prefix the assets with the public URL
    let artifactNamePrefix = '';
    if (
    siteInformation.siteConfiguration.webapp &&
    siteInformation.siteConfiguration.webapp.artifactNamePrefix)
    {
      artifactNamePrefix = siteInformation.siteConfiguration.webapp.artifactNamePrefix;
    }

    const graphQLServerUrl =
    `http://${envHost}:${envPort}` +
    artifactNamePrefix +
    (0, _getGraphQLLocalServerURL.default)(siteInformation);
    const fetcher = new _fetcherServer.default(graphQLServerUrl, reqUserToken1, _UserToken2ServerRendering.default);

    const userAgent = reqUserAgent;
    const { siteConfiguration } = siteInformation;
    const siteConfigurationSubset = {
      webapp: siteConfiguration.webapp,
      builder: siteConfiguration.builder };


    const siteRouteConfig = (0, _router.routeConfig)(siteConfigurationSubset);

    const { redirect, element } = await (0, _server.getFarceResult)({
      url: reqUrl,
      historyMiddlewares: _router.historyMiddlewares,
      routeConfig: siteRouteConfig,
      resolver: (0, _router.createResolver)(fetcher),
      render });


    if (redirect) {
      return { status: 302, redirectUrl: redirect.url };
    }

    const relayPayloads = (0, _serializeJavascript.default)(fetcher, { isJSON: true });

    const sheets = new _reactJss.SheetsRegistry();
    const helmet = _reactHelmet.default.rewind();

    const rootHTML = _server2.default.renderToString(
    _react.default.createElement(_reactJss.JssProvider, { registry: sheets },
    _react.default.createElement(_AppWrapper.default, { userAgent: userAgent, siteConfiguration: siteConfigurationSubset, url: reqUrl },
    element)));




    const htmlContent = htmlEjs({
      assets_path: assetsPath,
      root_html: rootHTML,
      server_side_styles: sheets.toString(),
      helmet,
      htmlHeadAdditions: _htmlHeadAdditions.default,
      siteConfiguration: JSON.stringify(siteConfigurationSubset),
      relayPayloads });


    return {
      status: 200,
      htmlContent };

  } catch (err) {
    throw new _nestedErrorStacks.default('Rendering failed', err);
  }
};exports.default = contentCreatorWebApp_async;
//# sourceMappingURL=contentCreatorWebApp_async.js.map