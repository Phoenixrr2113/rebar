"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _TranslaticiarumType = _interopRequireDefault(require("../type/TranslaticiarumType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'TranslaticiarumUpdate',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    Translaticiarum_Start: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Stop: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    Translaticiarum: {
      type: _TranslaticiarumType.default,
      resolve: (
      { local_id },
      { ...args },
      context,
      { rootValue: objectManager }) =>
      objectManager.getOneObject('Translaticiarum', { id: local_id }) } },



  mutateAndGetPayload: async (
  {
    id,
    Translaticiarum_Start,
    Translaticiarum_Stop,
    Translaticiarum_Description },

  context,
  { rootValue: objectManager }) =>
  {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.update('Translaticiarum', {
      id: local_id,
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description });


    return { local_id };
  } });exports.default = _default;
//# sourceMappingURL=TranslaticiarumUpdate.js.map