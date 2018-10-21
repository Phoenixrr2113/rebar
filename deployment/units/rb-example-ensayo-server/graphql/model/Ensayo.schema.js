"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('Ensayo', {
  fields: {
    id: 'uuid',
    Ensayo_artifact_id: 'uuid',
    Ensayo_User_id: 'uuid',
    Ensayo_Content: 'text',
    Ensayo_Description: 'text',
    Ensayo_Title: 'text' },


  indexes: ['Ensayo_User_id'],

  key: ['id']

  // custom_indexes: [
  //   {
  //     on: 'Ensayo_User_id',
  //     using: 'org.apache.cassandra.index.sasi.SASIIndex',
  //     options: {},
  //   },
  // ],
});var _default =

true;exports.default = _default;
//# sourceMappingURL=Ensayo.schema.js.map