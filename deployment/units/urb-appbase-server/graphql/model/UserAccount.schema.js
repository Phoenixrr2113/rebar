"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('UserAccount', {
  fields: {
    id: 'uuid',
    UserAccount_artifact_id: 'uuid',
    UserAccount_User_id: 'uuid',
    UserAccount_Identifier: 'text',
    UserAccount_Type: 'text' },


  key: ['id'],

  custom_indexes: [
  {
    on: 'UserAccount_Identifier',
    using: 'org.apache.cassandra.index.sasi.SASIIndex',
    options: {} }] });var _default =




true;exports.default = _default;
//# sourceMappingURL=UserAccount.schema.js.map