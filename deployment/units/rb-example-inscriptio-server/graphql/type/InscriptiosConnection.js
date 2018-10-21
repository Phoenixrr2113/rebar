"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _InscriptioType = _interopRequireDefault(require("./InscriptioType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.connectionDefinitions)({
  name: 'Inscriptios',
  nodeType: _InscriptioType.default });exports.default = _default;
//# sourceMappingURL=InscriptiosConnection.js.map