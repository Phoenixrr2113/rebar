"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _Inscriptio = _interopRequireDefault(require("../model/Inscriptio"));
var _NodeInterface = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/NodeInterface"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'Inscriptio',

  interfaces: [_NodeInterface.default],

  isTypeOf: object => object instanceof _Inscriptio.default,

  fields: {
    id: (0, _graphqlRelay.globalIdField)('Inscriptio'),
    Inscriptio_LocationLat: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.Inscriptio_LocationLat },

    Inscriptio_LocationLon: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.Inscriptio_LocationLon },

    Inscriptio_Notes: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.Inscriptio_Notes } } });exports.default = _default;
//# sourceMappingURL=InscriptioType.js.map