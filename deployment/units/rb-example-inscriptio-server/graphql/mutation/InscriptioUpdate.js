"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _InscriptioType = _interopRequireDefault(require("../type/InscriptioType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'InscriptioUpdate',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    Inscriptio_LocationLat: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_LocationLon: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_Notes: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    Inscriptio: {
      type: _InscriptioType.default,
      resolve: ({ local_id }, { ...args }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('Inscriptio', { id: local_id }) } },



  mutateAndGetPayload: async (
  { id, Inscriptio_LocationLat, Inscriptio_LocationLon, Inscriptio_Notes },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.update('Inscriptio', {
      id: local_id,
      Inscriptio_LocationLat,
      Inscriptio_LocationLon,
      Inscriptio_Notes });


    return { local_id };
  } });exports.default = _default;
//# sourceMappingURL=InscriptioUpdate.js.map