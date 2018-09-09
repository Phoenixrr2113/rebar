"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _NodeInterface = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/NodeInterface"));
var _ToDo = _interopRequireDefault(require("../model/ToDo"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'ToDo',

  interfaces: [_NodeInterface.default],

  isTypeOf: object => object instanceof _ToDo.default,

  fields: {
    id: (0, _graphqlRelay.globalIdField)('ToDo'),
    ToDo_Text: { type: _graphql.GraphQLString, resolve: obj => obj.ToDo_Text },
    ToDo_Complete: { type: _graphql.GraphQLBoolean, resolve: obj => obj.ToDo_Complete } } });exports.default = _default;
//# sourceMappingURL=ToDoType.js.map