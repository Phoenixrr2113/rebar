"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('Translaticiarum', {
  fields: {
    id: 'uuid',
    Translaticiarum_artifact_id: 'uuid',
    Translaticiarum_user_id: 'uuid',
    Translaticiarum_Stop: 'timestamp',
    Translaticiarum_Start: 'timestamp',
    Translaticiarum_Description: 'text' },


  key: ['Translaticiarum_user_id', 'id'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=Translaticiarum.schema.js.map