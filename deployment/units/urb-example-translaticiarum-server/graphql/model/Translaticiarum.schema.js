"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('Translaticiarum', {
  fields: {
    id: 'uuid',
    Translaticiarum_artifact_id: 'uuid',
    Translaticiarum_User_id: 'uuid',
    Translaticiarum_Stop: 'timestamp',
    Translaticiarum_Start: 'timestamp',
    Translaticiarum_Description: 'text' },


  indexes: ['Translaticiarum_User_id'],

  key: ['id']

  // custom_indexes: [
  //   {
  //     on: 'Translaticiarum_User_id',
  //     using: 'org.apache.cassandra.index.sasi.SASIIndex',
  //     options: {},
  //   },
  // ],
});var _default =

true;exports.default = _default;
//# sourceMappingURL=Translaticiarum.schema.js.map