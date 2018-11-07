"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _Ensayo = _interopRequireDefault(require("../model/Ensayo"));
var _NodeInterface = _interopRequireDefault(require("../../../../units/rb-appbase-server/graphql/NodeInterface"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'Ensayo',

  interfaces: [_NodeInterface.default],

  isTypeOf: object => object instanceof _Ensayo.default,

  fields: {
    id: (0, _graphqlRelay.globalIdField)('Ensayo'),
    Ensayo_Title: { type: _graphql.GraphQLString, resolve: obj => obj.Ensayo_Title },
    Ensayo_Description: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.Ensayo_Description },

    Ensayo_Content: { type: _graphql.GraphQLString, resolve: obj => obj.Ensayo_Content } } });exports.default = _default;
//# sourceMappingURL=EnsayoType.js.map