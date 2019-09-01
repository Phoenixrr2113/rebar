"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('Inscriptio', {
  fields: {
    id: 'uuid',
    Inscriptio_artifact_id: 'uuid',
    Inscriptio_user_id: 'uuid',
    Inscriptio_LocationLon: 'text',
    Inscriptio_LocationLat: 'text',
    Inscriptio_Notes: 'text' },


  key: ['Inscriptio_user_id', 'id'] });var _default =


true;exports.default = _default;
//# sourceMappingURL=Inscriptio.schema.js.map