"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");

var _TranslaticiarumsConnection = _interopRequireDefault(require("./TranslaticiarumsConnection"));
var _TranslaticiarumType = _interopRequireDefault(require("./TranslaticiarumType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
{
  Translaticiarums: {
    type: _TranslaticiarumsConnection.default.connectionType,

    args: { ..._graphqlRelay.connectionArgs },

    resolve: async (obj, { ...args }, context, { rootValue: objectManager }) => {
      const arr = await objectManager.getObjectList_async('Translaticiarum', {});

      return (0, _graphqlRelay.connectionFromArray)(arr, args);
    } },


  Translaticiarum: {
    type: _TranslaticiarumType.default,

    args: { ...{ id: { type: _graphql.GraphQLID } } },

    resolve: (parent, { id }, context, { rootValue: objectManager }) =>
    objectManager.getOneObject_async('Translaticiarum', { id: (0, _graphqlRelay.fromGlobalId)(id).id }) } };exports.default = _default;
//# sourceMappingURL=_ViewerFields.js.map