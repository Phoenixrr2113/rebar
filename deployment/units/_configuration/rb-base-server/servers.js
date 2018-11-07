"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = servers;

var _servers = _interopRequireDefault(require("../../rb-appbase-server/extenders/rb-base-server/servers"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function servers(router, firstPathElementIsArtifactName) {
  (0, _servers.default)(router, firstPathElementIsArtifactName);
}
//# sourceMappingURL=servers.js.map