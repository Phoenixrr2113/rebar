"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('UserSession', {
  fields: {
    id: 'uuid',
    UserSession_artifact_id: 'uuid',
    UserSession_User_id: 'uuid',
    UserSession_Start: 'timestamp',
    UserSession_Expired: 'boolean' },


  key: ['id'],

  custom_indexes: [
  {
    on: 'UserSession_User_id',
    using: 'org.apache.cassandra.index.sasi.SASIIndex',
    options: {} }] });var _default =




true;exports.default = _default;
//# sourceMappingURL=UserSession.schema.js.map