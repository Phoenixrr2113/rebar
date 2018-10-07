"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.getSiteInformation = getSiteInformation;

var _os = _interopRequireDefault(require("os"));

var _package = require("../../../package.json");

var _defaultPersister = _interopRequireDefault(require("./graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Import to demonstrate server-based site settings

// Read environment
require('dotenv').load();

const googleMapsJavascriptAPI = process.env.GOOGLE_MAPS_JAVASCRIPT_API;
if (googleMapsJavascriptAPI == null || typeof googleMapsJavascriptAPI !== 'string')
throw new Error(
'urb-example-inscriptio-webapp requires the environment variable GOOGLE_MAPS_JAVASCRIPT_API to be set');


const siteInformation = {
  artifact_id: _defaultPersister.default.uuidNull(),
  inEditingMode: false,
  isCfMakerDisabled: true,
  siteConfiguration: {
    webapp: {
      api: { googleMapsJavascriptAPI },
      urbDemo: { version: _package.version, OSType: _os.default.type(), OSHostName: _os.default.hostname(), OSFreeMem: _os.default.freemem() } },

    server: {},
    builderClient: {} } };



async function getSiteInformation(req, res) {
  return siteInformation;
}
//# sourceMappingURL=siteSettings.js.map