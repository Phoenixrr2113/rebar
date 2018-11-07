"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _InscriptiosConnection = _interopRequireDefault(require("../type/InscriptiosConnection"));
var _ViewerType = _interopRequireDefault(require("../../../../units/rb-appbase-server/graphql/type/ViewerType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'InscriptioAdd',

  inputFields: {
    Inscriptio_LocationLat: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_LocationLon: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_Notes: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    InscriptiosEdge: {
      type: _InscriptiosConnection.default.edgeType,
      resolve: async ({ local_id }, { ...args }, context, { rootValue: objectManager }) => {
        const an_Object = await objectManager.getOneObject('Inscriptio', {
          id: local_id });


        const arr = await objectManager.getObjectList('Inscriptio', {});

        return {
          cursor: objectManager.cursorForObjectInConnection('Inscriptio', arr, an_Object),
          node: an_Object };

      } },


    Viewer: {
      type: _ViewerType.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async (
  { Inscriptio_LocationLat, Inscriptio_LocationLon, Inscriptio_Notes },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = await objectManager.add('Inscriptio', {
      Inscriptio_LocationLat,
      Inscriptio_LocationLon,
      Inscriptio_Notes });

    return { local_id };
  } });exports.default = _default;
//# sourceMappingURL=InscriptioAdd.js.map