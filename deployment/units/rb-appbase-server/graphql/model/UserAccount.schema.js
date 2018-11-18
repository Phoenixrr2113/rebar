"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('UserAccount', {
  fields: {
    id: 'uuid',
    UserAccount_artifact_id: 'uuid',
    UserAccount_User_id: 'uuid',
    UserAccount_Identifier: 'text',
    UserAccount_Secret: 'text',
    UserAccount_Type: 'text',
    UserAccount_created_by: 'uuid',
    UserAccount_created_on: 'timestamp',
    UserAccount_modified_by: 'uuid',
    UserAccount_modified_on: 'timestamp' },


  key: [['UserAccount_artifact_id', 'UserAccount_Identifier', 'UserAccount_Type'], 'id'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=UserAccount.schema.js.map