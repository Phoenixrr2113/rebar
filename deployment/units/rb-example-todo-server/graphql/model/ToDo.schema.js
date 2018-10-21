"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/rb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('ToDo', {
  fields: {
    id: 'uuid',
    ToDo_artifact_id: 'uuid',
    ToDo_User_id: 'uuid',
    ToDo_Text: 'text',
    ToDo_Complete: 'boolean' },


  indexes: ['ToDo_User_id'],

  key: ['id']

  // custom_indexes: [
  //   {
  //     on: 'ToDo_User_id',
  //     using: 'org.apache.cassandra.index.sasi.SASIIndex',
  //     options: {},
  //   },
  // ],
});var _default =

true;exports.default = _default;
//# sourceMappingURL=ToDo.schema.js.map