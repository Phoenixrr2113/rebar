'use strict';

var _process = require('process');var _process2 = _interopRequireDefault(_process);

require('../../units/urb-appbase-server/graphql/schema');
var _ObjectManager = require('../urb-base-server/ObjectManager');var _ObjectManager2 = _interopRequireDefault(_ObjectManager);


require('../_configuration/urb-base-server/graphql/_schemas');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Schema for GraphQL server

_ObjectManager2.default.initializePersisters(true, () => {
  _process2.default.exit();
}); // Guarantee that all object registrations and schema definitions are executed
//# sourceMappingURL=setupDatabase.js.map