'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.






























getSiteInformation = getSiteInformation;var _os = require('os');var _os2 = _interopRequireDefault(_os);var _package = require('../package');var _defaultPersister = require('./graphql/defaultPersister');var _defaultPersister2 = _interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Read environment
// Import to demonstrate server-based site settings
require('dotenv').load();const googleMapsJavascriptAPI = process.env.GOOGLE_MAPS_JAVASCRIPT_API;if (googleMapsJavascriptAPI == null || typeof googleMapsJavascriptAPI !== 'string') throw new Error('urb-example-inscriptio-webapp requires the environment variable GOOGLE_MAPS_JAVASCRIPT_API to be set');const siteInformation = { artifact_id: _defaultPersister2.default.uuidNull(), inEditingMode: false, isSiteBuilderDisabled: true, siteConfiguration: { webapp: { api: { googleMapsJavascriptAPI }, urbDemo: { version: _package.version, OSType: _os2.default.type(), OSHostName: _os2.default.hostname(), OSFreeMem: _os2.default.freemem() } }, server: {}, builderClient: {} } };async function getSiteInformation(req, res) {return siteInformation;}
//# sourceMappingURL=siteSettings.js.map