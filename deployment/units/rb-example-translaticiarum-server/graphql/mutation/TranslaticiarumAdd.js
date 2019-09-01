"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _TranslaticiarumsConnection = _interopRequireDefault(require("../type/TranslaticiarumsConnection"));
var _ViewerType = _interopRequireDefault(require("../../../../units/rb-appbase-server/graphql/type/ViewerType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'TranslaticiarumAdd',

  inputFields: {
    Translaticiarum_Start: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Stop: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    TranslaticiarumsEdge: {
      type: _TranslaticiarumsConnection.default.edgeType,
      resolve: async (
      { local_id },
      { ...args },
      context,
      { rootValue: objectManager }) =>
      {
        const an_Object = await objectManager.getOneObject_async(
        'Translaticiarum',
        {
          id: local_id });



        const arr = await objectManager.getObjectList_async(
        'Translaticiarum',
        {});


        return {
          cursor: objectManager.cursorForObjectInConnection(
          'Translaticiarum',
          arr,
          an_Object),

          node: an_Object };

      } },


    Viewer: {
      type: _ViewerType.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject_async('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async (
  {
    Translaticiarum_Start,
    Translaticiarum_Stop,
    Translaticiarum_Description },

  context,
  { rootValue: objectManager }) =>
  {
    const local_id = await objectManager.add('Translaticiarum', {
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description });

    return { local_id };
  } });exports.default = _default;
//# sourceMappingURL=TranslaticiarumAdd.js.map