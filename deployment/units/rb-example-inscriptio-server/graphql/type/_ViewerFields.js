"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");

var _InscriptiosConnection = _interopRequireDefault(require("./InscriptiosConnection"));
var _InscriptioType = _interopRequireDefault(require("./InscriptioType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
{
  Inscriptios: {
    type: _InscriptiosConnection.default.connectionType,

    args: { ..._graphqlRelay.connectionArgs },

    resolve: async (obj, { ...args }, context, { rootValue: objectManager }) => {
      const arr = await objectManager.getObjectList_async('Inscriptio', {});

      return (0, _graphqlRelay.connectionFromArray)(arr, args);
    } },


  Inscriptio: {
    type: _InscriptioType.default,

    args: { ...{ id: { type: _graphql.GraphQLID } } },

    resolve: (parent, { id }, context, { rootValue: objectManager }) =>
    objectManager.getOneObject_async('Inscriptio', { id: (0, _graphqlRelay.fromGlobalId)(id).id }) } };exports.default = _default;
//# sourceMappingURL=_ViewerFields.js.map