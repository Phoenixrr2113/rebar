'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _NodeInterface = require('../../../../units/urb-appbase-server/graphql/NodeInterface');var _NodeInterface2 = _interopRequireDefault(_NodeInterface);
var _ObjectUserPermission = require('../model/ObjectUserPermission');var _ObjectUserPermission2 = _interopRequireDefault(_ObjectUserPermission);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

new _graphql.GraphQLObjectType({
  name: 'ObjectUserPermission',
  interfaces: [_NodeInterface2.default],
  isTypeOf: object => object instanceof _ObjectUserPermission2.default,
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
      resolve: obj => obj.ObjectUserPermission_PermitMiscAsJSON } } });
//# sourceMappingURL=ObjectUserPermissionType.js.map