"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphql = require("graphql");






var _graphqlRelay = require("graphql-relay");

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/defaultPersister"));
var _NodeInterface = _interopRequireDefault(require("../NodeInterface"));
var _ViewerFields2 = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/_ViewerFields"));
var _User = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/model/User"));

var _ObjectUserPermissionsConnection = _interopRequireDefault(require("./ObjectUserPermissionsConnection"));
var _ObjectUserPermissionType = _interopRequireDefault(require("./ObjectUserPermissionType"));
var _ResourceUserAllowancesConnection = _interopRequireDefault(require("./ResourceUserAllowancesConnection"));
var _ResourceUserAllowanceType = _interopRequireDefault(require("./ResourceUserAllowanceType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'Viewer',
  interfaces: [_NodeInterface.default],
  isTypeOf: object => object instanceof _User.default,
  fields: {
    id: (0, _graphqlRelay.globalIdField)('Viewer'),
    User_IsAnonymous: {
      type: _graphql.GraphQLBoolean,
      resolve: obj => _defaultPersister.default.uuidEquals(obj.id, _defaultPersister.default.uuidNull()) },

    UserToken2: { type: _graphql.GraphQLString, resolve: obj => obj.UserToken2 },
    User_DisplayName: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.User_DisplayName },

    User_Email: { type: _graphql.GraphQLString, resolve: obj => obj.User_Email },
    User_PhoneNumberMobile: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.User_PhoneNumberMobile },


    ObjectUserPermissions: {
      type: _ObjectUserPermissionsConnection.default.connectionType,

      args: {
        ..._graphqlRelay.connectionArgs,
        ObjectUserPermission_Name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


      resolve: async (obj, { ...args }, context, { rootValue: objectManager }) => {
        const { ObjectUserPermission_Name } = args;
        const arr = await objectManager.getObjectList('ObjectUserPermission', {
          ObjectUserPermission_Name });

        return (0, _graphqlRelay.connectionFromArray)(arr, args);
      } },


    ObjectUserPermission: {
      type: _ObjectUserPermissionType.default,

      args: { ...{ id: { type: _graphql.GraphQLID } } },

      resolve: async (parent, { id }, context, { rootValue: objectManager }) => {
        const local_id = objectManager.uuidFromString('ObjectUserPermission', (0, _graphqlRelay.fromGlobalId)(id).id);

        return await objectManager.getOneObject('ObjectUserPermission', {
          id: local_id,
          _materialized_view: 'ObjectUserPermission_by_ID' });

      } },


    ResourceUserAllowances: {
      type: _ResourceUserAllowancesConnection.default.connectionType,

      args: { ..._graphqlRelay.connectionArgs },

      resolve: async (obj, { ...args }, context, { rootValue: objectManager }) => {
        const arr = await objectManager.getObjectList('ResourceUserAllowance', {});
        return (0, _graphqlRelay.connectionFromArray)(arr, args);
      } },


    ResourceUserAllowance: {
      type: _ResourceUserAllowanceType.default,

      args: { ...{ id: { type: _graphql.GraphQLID } } },

      resolve: async (parent, { id }, context, { rootValue: objectManager }) => {
        const local_id = objectManager.uuidFromString('ResourceUserAllowance', (0, _graphqlRelay.fromGlobalId)(id).id);

        return await objectManager.getOneObject('ResourceUserAllowance', {
          id: local_id,

          _materialized_view: 'ResourceUserAllowance_by_ID' });

      } },


    ..._ViewerFields2.default } });exports.default = _default;
//# sourceMappingURL=ViewerType.js.map