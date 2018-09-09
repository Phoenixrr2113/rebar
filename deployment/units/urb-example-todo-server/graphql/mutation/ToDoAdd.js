"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _ToDosConnection = _interopRequireDefault(require("../type/ToDosConnection"));
var _ViewerType = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/type/ViewerType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'ToDoAdd',

  inputFields: {
    ToDo_Text: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    ToDosEdge: {
      type: _ToDosConnection.default.edgeType,
      resolve: async ({ local_id }, { ...args }, context, { rootValue: objectManager }) => {
        const an_Object = await objectManager.getOneObject('ToDo', {
          id: local_id });


        const arr = await objectManager.getObjectList('ToDo', {});

        return {
          cursor: objectManager.cursorForObjectInConnection('ToDo', arr, an_Object),
          node: an_Object };

      } },


    Viewer: {
      type: _ViewerType.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async ({ ToDo_Text }, context, { rootValue: objectManager }) => {
    const local_id = await objectManager.add('ToDo', {
      ToDo_Text,
      ToDo_Complete: false });

    return { local_id };
  } });exports.default = _default;
//# sourceMappingURL=ToDoAdd.js.map