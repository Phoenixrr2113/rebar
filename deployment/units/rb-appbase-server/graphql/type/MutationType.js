"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphql = require("graphql");

var _mutations2 = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/_mutations"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: { ..._mutations2.default } });exports.default = _default;
//# sourceMappingURL=MutationType.js.map