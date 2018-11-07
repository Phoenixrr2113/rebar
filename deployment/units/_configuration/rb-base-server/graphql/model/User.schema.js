"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('User', {
  fields: {
    id: 'uuid',
    User_artifact_id: 'uuid',
    UserToken2: 'text',
    User_Secret: 'text',
    User_DisplayName: 'text',
    User_Email: 'text',
    User_PhoneNumberMobile: 'text',
    User_Latitude: 'double',
    User_Longitude: 'double' },

  key: ['id'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=User.schema.js.map