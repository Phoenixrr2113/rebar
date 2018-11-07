"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");
var _graphqlIsoDate = require("graphql-iso-date");

var _Translaticiarum = _interopRequireDefault(require("../model/Translaticiarum"));
var _NodeInterface = _interopRequireDefault(require("../../../../units/rb-appbase-server/graphql/NodeInterface"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'Translaticiarum',

  interfaces: [_NodeInterface.default],

  isTypeOf: object => object instanceof _Translaticiarum.default,

  fields: {
    id: (0, _graphqlRelay.globalIdField)('Translaticiarum'),
    Translaticiarum_Start: {
      type: _graphqlIsoDate.GraphQLDateTime,
      resolve: obj => obj.Translaticiarum_Start },

    Translaticiarum_Stop: {
      type: _graphqlIsoDate.GraphQLDateTime,
      resolve: obj => obj.Translaticiarum_Stop },

    Translaticiarum_Description: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.Translaticiarum_Description } } });exports.default = _default;
//# sourceMappingURL=TranslaticiarumType.js.map