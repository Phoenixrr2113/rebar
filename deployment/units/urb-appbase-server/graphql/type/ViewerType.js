'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphql = require('graphql');






var _graphqlRelay = require('graphql-relay');

var _defaultPersister = require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2 = _interopRequireDefault(_defaultPersister);
var _NodeInterface = require('../NodeInterface');var _NodeInterface2 = _interopRequireDefault(_NodeInterface);
var _ViewerFields2 = require('../../../_configuration/urb-base-server/graphql/_ViewerFields');var _ViewerFields3 = _interopRequireDefault(_ViewerFields2);
var _User = require('../../../_configuration/urb-base-server/graphql/model/User');var _User2 = _interopRequireDefault(_User);

var _ObjectUserPermissionsConnection = require('./ObjectUserPermissionsConnection');var _ObjectUserPermissionsConnection2 = _interopRequireDefault(_ObjectUserPermissionsConnection);
var _ObjectUserPermissionType = require('./ObjectUserPermissionType');var _ObjectUserPermissionType2 = _interopRequireDefault(_ObjectUserPermissionType);
var _ResourceUserAllowancesConnection = require('./ResourceUserAllowancesConnection');var _ResourceUserAllowancesConnection2 = _interopRequireDefault(_ResourceUserAllowancesConnection);
var _ResourceUserAllowanceType = require('./ResourceUserAllowanceType');var _ResourceUserAllowanceType2 = _interopRequireDefault(_ResourceUserAllowanceType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}exports.default =

new _graphql.GraphQLObjectType({
  name: 'Viewer',
  interfaces: [_NodeInterface2.default],
  isTypeOf: object => object instanceof _User2.default,
  fields: Object.assign({
    id: (0, _graphqlRelay.globalIdField)('Viewer'),
    User_IsAnonymous: {
      type: _graphql.GraphQLBoolean,
      resolve: obj => _defaultPersister2.default.uuidEquals(obj.id, _defaultPersister2.default.uuidNull()) },

    UserToken2: { type: _graphql.GraphQLString, resolve: obj => obj.UserToken2 },
    User_DisplayName: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.User_DisplayName },

    User_Email: { type: _graphql.GraphQLString, resolve: obj => obj.User_Email },
    User_PhoneNumberMobile: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.User_PhoneNumberMobile },


    ObjectUserPermissions: {
      type: _ObjectUserPermissionsConnection2.default.connectionType,

      args: Object.assign({},
      _graphqlRelay.connectionArgs, {
        ObjectUserPermission_Name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } }),


      resolve: async (obj, _ref, context, { rootValue: objectManager }) => {let args = _objectWithoutProperties(_ref, []);
        const { ObjectUserPermission_Name } = args;
        const arr = await objectManager.getObjectList('ObjectUserPermission', {
          ObjectUserPermission_Name });

        return (0, _graphqlRelay.connectionFromArray)(arr, args);
      } },


    ObjectUserPermission: {
      type: _ObjectUserPermissionType2.default,

      args: Object.assign({ id: { type: _graphql.GraphQLID } }),

      resolve: async (parent, { id }, context, { rootValue: objectManager }) => {
        const local_id = objectManager.uuidFromString('ObjectUserPermission', (0, _graphqlRelay.fromGlobalId)(id).id);

        return await objectManager.getOneObject('ObjectUserPermission', {
          id: local_id,
          _materialized_view: 'ObjectUserPermission_by_ID' });

      } },


    ResourceUserAllowances: {
      type: _ResourceUserAllowancesConnection2.default.connectionType,

      args: Object.assign({}, _graphqlRelay.connectionArgs),

      resolve: async (obj, _ref2, context, { rootValue: objectManager }) => {let args = _objectWithoutProperties(_ref2, []);
        const arr = await objectManager.getObjectList('ResourceUserAllowance', {});
        return (0, _graphqlRelay.connectionFromArray)(arr, args);
      } },


    ResourceUserAllowance: {
      type: _ResourceUserAllowanceType2.default,

      args: Object.assign({ id: { type: _graphql.GraphQLID } }),

      resolve: async (parent, { id }, context, { rootValue: objectManager }) => {
        const local_id = objectManager.uuidFromString('ResourceUserAllowance', (0, _graphqlRelay.fromGlobalId)(id).id);

        return await objectManager.getOneObject('ResourceUserAllowance', {
          id: local_id,

          _materialized_view: 'ResourceUserAllowance_by_ID' });

      } } },


  _ViewerFields3.default) });
//# sourceMappingURL=ViewerType.js.map