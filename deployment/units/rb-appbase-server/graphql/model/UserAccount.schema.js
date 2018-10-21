"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('UserAccount', {
  fields: {
    id: 'uuid',
    UserAccount_artifact_id: 'uuid',
    UserAccount_User_id: 'uuid',
    UserAccount_Identifier: 'text',
    UserAccount_Type: 'text' },


  key: [['UserAccount_artifact_id', 'UserAccount_Identifier'], 'id'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=UserAccount.schema.js.map