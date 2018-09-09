"use strict";




var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));
var _compression = _interopRequireDefault(require("compression"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _package = require("../_configuration/package");
var _servers = _interopRequireDefault(require("../_configuration/urb-base-server/servers"));

var _getLocalIP = _interopRequireDefault(require("./getLocalIP"));
var _log = _interopRequireDefault(require("./log"));
var _ObjectCache = require("./ObjectCache");
var _ObjectManager = _interopRequireDefault(require("./ObjectManager"));
var _serverHealthz = _interopRequireDefault(require("./serverHealthz"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // In order to use ES7 async/await
//import 'babel-polyfill'
// Health check endpoint server
//
// Read environment
require('dotenv').load();

const port = process.env.PORT;
if (port == null || typeof port !== 'string')
throw new Error('urb-base-server/server.js requires the environment variable PORT to be set');

const host = process.env.HOST;
if (host == null || typeof host !== 'string')
throw new Error('urb-base-server/server.js requires the environment variable HOST to be set'); // Log startup information

_log.default.log('info', 'Starting application', {
  name: _package.name,
  version: _package.version,
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  PUBLIC_URL: process.env.PUBLIC_URL,
  process_title: process.title,
  process_pid: process.pid,
  local_ip: (0, _getLocalIP.default)() });


// Get object cache ready
(0, _ObjectCache.initializeObjectCache)();

// Main router
const server = (0, _express.default)();

// Add headers
server.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.PUBLIC_URL);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
}); // Configure main router

server.set('trust proxy', 'loopback');
server.set('x-powered-by', false);
server.use((0, _compression.default)());
server.use((0, _cookieParser.default)()); // GraphQL server requires this

server.use('/healthz', _serverHealthz.default); // Static public files server
server.use(
_express.default.static(_path.default.resolve(__dirname + '/../_configuration/urb-base-server/public_files/'), {
  maxAge: 365 * 86400 // one year
}));


// Initialize server extenders
(0, _servers.default)(server);

_ObjectManager.default.initializePersisters(false, () => {
  // Serve - work differently in development and production. In production only the
  // specified host serves
  if (process.env.NODE_ENV === 'production') {
    // Production - serve as told
    server.listen(port, host);
  } else {
    // Development server - localhost. Always run on localhost
    startDevelopmentServer(port, '127.0.0.1');
    // Development server - on a specific IP, if different from localhost
    if (host !== '127.0.0.1') startDevelopmentServer(port, host);
  }
});

function startDevelopmentServer(port, host) {
  const localIPDevelopmentServer = (0, _express.default)();
  localIPDevelopmentServer.use(server);
  localIPDevelopmentServer.listen(port, host);
}
//# sourceMappingURL=server.js.map