"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _UserQuotaForObjectType = _interopRequireDefault(require("./UserQuotaForObjectType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

(0, _graphqlRelay.connectionDefinitions)({
  name: 'UserQuotaForObjects',
  nodeType: _UserQuotaForObjectType.default });exports.default = _default;
//# sourceMappingURL=UserQuotaForObjectsConnection.js.map