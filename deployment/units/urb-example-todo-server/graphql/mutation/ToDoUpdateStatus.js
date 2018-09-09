"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _ToDoType = _interopRequireDefault(require("../type/ToDoType"));
var _ViewerType = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/type/ViewerType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'ToDoUpdateStatus',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    ToDo_Complete: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean) } },


  outputFields: {
    ToDo: {
      type: _ToDoType.default,
      resolve: ({ local_id }, { ...args }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('ToDo', { id: local_id }) },


    Viewer: {
      type: _ViewerType.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async ({ id, ToDo_Complete }, context, { rootValue: objectManager }) => {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.update('ToDo', {
      id: local_id,
      ToDo_Complete });


    return { local_id };
  } });exports.default = _default;
//# sourceMappingURL=ToDoUpdateStatus.js.map