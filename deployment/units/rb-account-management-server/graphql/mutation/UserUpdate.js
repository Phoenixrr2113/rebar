"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _ViewerType = _interopRequireDefault(require("../../../rb-appbase-server/graphql/type/ViewerType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'UserUpdate',

  inputFields: {
    User_DisplayName: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    User_PrimaryEmail: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    User_PrimaryPhone: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    Viewer: {
      type: _ViewerType.default,
      resolve: (params, { ...args }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject_async('User', { id: objectManager.getViewerUserId() }) } },



  mutateAndGetPayload: async (
  { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone },
  context,
  { rootValue: objectManager }) =>
  {
    await objectManager.update('User', {
      id: objectManager.getViewerUserId(),
      User_DisplayName,
      User_PrimaryEmail,
      User_PrimaryPhone });


    return {};
  } });exports.default = _default;
//# sourceMappingURL=UserUpdate.js.map