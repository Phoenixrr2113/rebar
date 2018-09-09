"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _ObjectUserPermissionType = _interopRequireDefault(require("./ObjectUserPermissionType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.connectionDefinitions)({
  name: 'ObjectUserPermissions',
  nodeType: _ObjectUserPermissionType.default });exports.default = _default;
//# sourceMappingURL=ObjectUserPermissionsConnection.js.map