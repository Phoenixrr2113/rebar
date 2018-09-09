"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('logs', {
  fields: {
    key: 'text',
    date: 'timestamp',
    level: 'text',
    message: 'text',
    meta: 'text' },

  key: ['key', 'date'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=logs.schema.js.map