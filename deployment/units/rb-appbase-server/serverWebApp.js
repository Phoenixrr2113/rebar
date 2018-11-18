"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _express = _interopRequireDefault(require("express"));
var _react = _interopRequireDefault(require("react"));
var _server = _interopRequireDefault(require("react-dom/server"));

var _ErrorComponent = _interopRequireDefault(require("../_configuration/rb-appbase-webapp/ErrorComponent"));
var _log = _interopRequireDefault(require("../rb-base-server/log"));
var _siteSettings = require("../_configuration/rb-base-server/siteSettings");
var _preRequests = require("../_configuration/rb-appbase-server/preRequests");

var _contentCreatorWebApp_async = _interopRequireDefault(require("./contentCreatorWebApp_async"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Create express router for the web app
const serverWebApp = (0, _express.default)();

serverWebApp.use(async (req, res) => {
  const siteInformation = await (0, _siteSettings.getSiteInformation)(req, res);

  if (siteInformation) {
    try {
      await (0, _preRequests.preRequest_async)(req, res, siteInformation);

      const reqUrl = req.url;
      const reqUserAgent = req.headers['user-agent'];
      // Notice that anonymous user creation may 'inject' newly created
      // UserToken1 into request cookies
      const reqUserToken1 = req.cookies.UserToken1;

      const content = await (0, _contentCreatorWebApp_async.default)(
      siteInformation,
      reqUrl,
      reqUserAgent,
      reqUserToken1);


      if (content.status === 200) {
        res.status(200).send(content.htmlContent);
      } else if (content.status === 302) {
        res.redirect(302, content.redirectUrl);
      } else if (content.status === 404) {
        res.status(404);
      } else if (content.status === 403) {
        // Log out for next attempt
        res.cookie('UserToken1', '', { httpOnly: true, expires: new Date(1) });
        // Return error information
        res.status(403).send(_server.default.renderToString(_react.default.createElement(_ErrorComponent.default, { httpStatus: 403 })));
      }
    } catch (err) {
      (0, _log.default)('error', 'rb-appbase-server serverWebApp.use : Failed', { err });
      res.status(500).send(_server.default.renderToString(_react.default.createElement(_ErrorComponent.default, { httpStatus: 500 })));
    }
  } else {
    res.status(200).send('disassociated');
  }
});var _default =

serverWebApp;exports.default = _default;
//# sourceMappingURL=serverWebApp.js.map