"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _ToDoType = _interopRequireDefault(require("./ToDoType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.connectionDefinitions)({
  name: 'ToDos',
  nodeType: _ToDoType.default });exports.default = _default;
//# sourceMappingURL=ToDosConnection.js.map