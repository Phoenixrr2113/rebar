"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('Inscriptio', {
  fields: {
    id: 'uuid',
    Inscriptio_artifact_id: 'uuid',
    Inscriptio_User_id: 'uuid',
    Inscriptio_LocationLon: 'text',
    Inscriptio_LocationLat: 'text',
    Inscriptio_Notes: 'text' },


  indexes: ['Inscriptio_User_id'],

  key: ['id']

  // custom_indexes: [
  //   {
  //     on: 'Inscriptio_User_id',
  //     using: 'org.apache.cassandra.index.sasi.SASIIndex',
  //     options: {},
  //   },
  // ],
});var _default =

true;exports.default = _default;
//# sourceMappingURL=Inscriptio.schema.js.map