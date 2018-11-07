"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _NodeInterface = _interopRequireDefault(require("../../../../units/rb-appbase-server/graphql/NodeInterface"));
var _UserQuotaForObject = _interopRequireDefault(require("../model/UserQuotaForObject"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'UserQuotaForObject',
  interfaces: [_NodeInterface.default],
  isTypeOf: object => object instanceof _UserQuotaForObject.default,
  fields: {
    id: (0, _graphqlRelay.globalIdField)('UserQuotaForObject'),
    UserQuotaForObject_Name: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.UserQuotaForObject_Name },

    UserQuotaForObject_MinAmount: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MinAmount },

    UserQuotaForObject_MinWarning: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MinWarning },

    UserQuotaForObject_MaxAmount: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MaxAmount },

    UserQuotaForObject_MaxWarning: {
      type: _graphql.GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MaxWarning },

    UserQuotaForObject_AllowMiscAsJSON: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.UserQuotaForObject_AllowMiscAsJSON } } });exports.default = _default;
//# sourceMappingURL=UserQuotaForObjectType.js.map