"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _UserPermissionForObjectType = _interopRequireDefault(require("./UserPermissionForObjectType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.connectionDefinitions)({
  name: 'UserPermissionForObjects',
  nodeType: _UserPermissionForObjectType.default });exports.default = _default;
//# sourceMappingURL=UserPermissionForObjectsConnection.js.map