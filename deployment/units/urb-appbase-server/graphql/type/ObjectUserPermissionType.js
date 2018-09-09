"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _NodeInterface = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/NodeInterface"));
var _ObjectUserPermission = _interopRequireDefault(require("../model/ObjectUserPermission"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'ObjectUserPermission',
  interfaces: [_NodeInterface.default],
  isTypeOf: object => object instanceof _ObjectUserPermission.default,
  fields: {
    id: (0, _graphqlRelay.globalIdField)('ObjectUserPermission'),
    ObjectUserPermission_Name: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.ObjectUserPermission_Name },

    ObjectUserPermission_PermitCreate: {
      type: _graphql.GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitCreate },

    ObjectUserPermission_PermitRead: {
      type: _graphql.GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitRead },

    ObjectUserPermission_PermitUpdate: {
      type: _graphql.GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitUpdate },

    ObjectUserPermission_PermitDelete: {
      type: _graphql.GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitDelete },

    ObjectUserPermission_PermitMiscAsJSON: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.ObjectUserPermission_PermitMiscAsJSON } } });exports.default = _default;
//# sourceMappingURL=ObjectUserPermissionType.js.map