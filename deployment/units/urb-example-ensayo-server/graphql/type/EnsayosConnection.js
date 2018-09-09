"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _EnsayoType = _interopRequireDefault(require("./EnsayoType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.connectionDefinitions)({
  name: 'Ensayos',
  nodeType: _EnsayoType.default });exports.default = _default;
//# sourceMappingURL=EnsayosConnection.js.map