"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _defaultPersister = _interopRequireDefault(require("../../../_configuration/urb-base-server/graphql/defaultPersister"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_defaultPersister.default.addTableSchema('UserQuotaForObject', {
  fields: {
    id: 'uuid',
    UserQuotaForObject_artifact_id: 'uuid',
    UserQuotaForObject_user_id: 'uuid',
    UserQuotaForObject_Name: 'text',
    UserQuotaForObject_MinAmount: 'int',
    UserQuotaForObject_MinWarning: 'int',
    UserQuotaForObject_MaxAmount: 'int',
    UserQuotaForObject_MaxWarning: 'int',
    UserQuotaForObject_AllowMiscAsJSON: 'text',
    UserQuotaForObject_created_by: 'uuid',
    UserQuotaForObject_created_on: 'timestamp',
    UserQuotaForObject_modified_by: 'uuid',
    UserQuotaForObject_modified_on: 'timestamp' },

  key: [
  ['UserQuotaForObject_artifact_id', 'UserQuotaForObject_user_id', 'UserQuotaForObject_Name'],
  'id'],

  materialized_views: {
    UserQuotaForObject_by_MakerArtifact_id: {
      select: [
      'id',
      'UserQuotaForObject_artifact_id',
      'UserQuotaForObject_user_id',
      'UserQuotaForObject_Name',
      'UserQuotaForObject_MinAmount',
      'UserQuotaForObject_MinWarning',
      'UserQuotaForObject_MaxAmount',
      'UserQuotaForObject_MaxWarning',
      'UserQuotaForObject_AllowMiscAsJSON',
      'UserQuotaForObject_created_by',
      'UserQuotaForObject_created_on',
      'UserQuotaForObject_modified_by',
      'UserQuotaForObject_modified_on'],

      key: [
      ['UserQuotaForObject_artifact_id', 'UserQuotaForObject_Name'],
      'UserQuotaForObject_user_id',
      'id'] } } });var _default =





true;exports.default = _default;
//# sourceMappingURL=UserQuotaForObject.schema.js.map