"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('ToDo', {
  fields: {
    id: 'uuid',
    ToDo_artifact_id: 'uuid',
    ToDo_user_id: 'uuid',
    ToDo_Text: 'text',
    ToDo_Complete: 'boolean' },


  key: [['ToDo_artifact_id', 'ToDo_user_id'], 'id'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=ToDo.schema.js.map