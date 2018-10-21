"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphql = require("graphql");

var _QueryType = _interopRequireDefault(require("./type/QueryType"));
var _graphQLError = require("./graphQLError");
var _MutationType = _interopRequireDefault(require("./type/MutationType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// export the entire compiled schema which specifies
// how to query and mutate all of our types
const schema = new _graphql.GraphQLSchema({
  query: _QueryType.default,
  mutation: _MutationType.default });


(0, _graphQLError.maskErrors)(schema);var _default =

schema;exports.default = _default;
//# sourceMappingURL=schema.js.map