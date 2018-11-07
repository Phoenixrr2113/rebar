"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _TranslaticiarumType = _interopRequireDefault(require("./TranslaticiarumType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.connectionDefinitions)({
  name: 'Translaticiarums',
  nodeType: _TranslaticiarumType.default });exports.default = _default;
//# sourceMappingURL=TranslaticiarumsConnection.js.map