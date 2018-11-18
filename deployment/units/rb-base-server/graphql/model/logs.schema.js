"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('logs', {
  fields: {
    date: 'text',
    datetime: 'timestamp',
    level: 'text',
    message: 'text',
    details: 'text',
    issue_id: 'text',
    local_ip: 'text',
    port: 'text',
    host: 'text',
    process_pid: 'int',
    err_message: 'text',
    err_stack: 'text',
    err_info: 'text',
    req_headers: 'text',
    req_cookies: 'text',
    req_ip: 'text',
    req_body: 'text',
    user_id: 'uuid',
    site_id: 'uuid' },

  key: ['date', 'datetime'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=logs.schema.js.map