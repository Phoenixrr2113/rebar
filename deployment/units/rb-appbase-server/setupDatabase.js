"use strict";

var _process = _interopRequireDefault(require("process"));

var _log = _interopRequireDefault(require("../rb-base-server/log"));
var _ObjectManager = _interopRequireDefault(require("../rb-base-server/ObjectManager"));


require("../_configuration/rb-base-server/graphql/_schemas");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Guarantee that all object registrations and schema definitions are executed

_ObjectManager.default.initializePersisters(true, () => {
  (0, _log.default)('info', 'rb-appbase-server setupDatabase completed', {});
  _process.default.exit();
});
//# sourceMappingURL=setupDatabase.js.map