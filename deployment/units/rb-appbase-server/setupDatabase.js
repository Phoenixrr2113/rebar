"use strict";

var _process = _interopRequireDefault(require("process"));

require("../../units/rb-appbase-server/graphql/schema");
var _ObjectManager = _interopRequireDefault(require("../rb-base-server/ObjectManager"));


require("../_configuration/rb-base-server/graphql/_schemas");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Schema for GraphQL server
// Guarantee that all object registrations and schema definitions are executed
_ObjectManager.default.initializePersisters(true, () => {
  _process.default.exit();
});
//# sourceMappingURL=setupDatabase.js.map