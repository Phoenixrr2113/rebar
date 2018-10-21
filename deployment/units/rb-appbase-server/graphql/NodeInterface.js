"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphql = require("graphql");var _default =

new _graphql.GraphQLInterfaceType({
  name: 'Node',
  description: 'An object with a globally unique id.',
  fields: () => ({
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
      description: 'The globally unique id of the object.' } }) });exports.default = _default;
//# sourceMappingURL=NodeInterface.js.map