"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _NodeInterface = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/NodeInterface"));
var _ResourceUserAllowance = _interopRequireDefault(require("../model/ResourceUserAllowance"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'ResourceUserAllowance',
  interfaces: [_NodeInterface.default],
  isTypeOf: object => object instanceof _ResourceUserAllowance.default,
  fields: {
    id: (0, _graphqlRelay.globalIdField)('ResourceUserAllowance'),
    ResourceUserAllowance_Name: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.ResourceUserAllowance_Name },

    ResourceUserAllowance_MinAmount: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MinAmount },

    ResourceUserAllowance_MinWarning: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MinWarning },

    ResourceUserAllowance_MaxAmount: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MaxAmount },

    ResourceUserAllowance_MaxWarning: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MaxWarning },

    ResourceUserAllowance_AllowMiscAsJSON: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.ResourceUserAllowance_AllowMiscAsJSON } } });exports.default = _default;
//# sourceMappingURL=ResourceUserAllowanceType.js.map