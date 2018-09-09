// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'ObjectUserPermission', {
  fields: {
    id: 'uuid',
    ObjectUserPermission_artifact_id: 'uuid',
    ObjectUserPermission_user_id: 'uuid',
    ObjectUserPermission_Name: 'text',
    ObjectUserPermission_PermitCreate: 'boolean',
    ObjectUserPermission_PermitRead: 'boolean',
    ObjectUserPermission_PermitUpdate: 'boolean',
    ObjectUserPermission_PermitDelete: 'boolean',
    ObjectUserPermission_PermitMiscAsJSON: 'text',
    ObjectUserPermission_created_by: 'uuid',
    ObjectUserPermission_created_on: 'timestamp',
    ObjectUserPermission_modified_by: 'uuid',
    ObjectUserPermission_modified_on: 'timestamp',
  },
  key: [
    [
      'ObjectUserPermission_artifact_id',
      'ObjectUserPermission_user_id',
      'ObjectUserPermission_Name',
    ],
    'id',
  ],
  materialized_views: {
    ObjectUserPermission_by_MakerArtifact_id: {
      select: [
        'id',
        'ObjectUserPermission_artifact_id',
        'ObjectUserPermission_user_id',
        'ObjectUserPermission_Name',
        'ObjectUserPermission_PermitCreate',
        'ObjectUserPermission_PermitRead',
        'ObjectUserPermission_PermitUpdate',
        'ObjectUserPermission_PermitDelete',
        'ObjectUserPermission_PermitMiscAsJSON',
        'ObjectUserPermission_created_by',
        'ObjectUserPermission_created_on',
        'ObjectUserPermission_modified_by',
        'ObjectUserPermission_modified_on',
      ],
      key: [
        [ 'ObjectUserPermission_artifact_id', 'ObjectUserPermission_Name' ],
        'ObjectUserPermission_user_id',
        'id',
      ],
    },
  },
})

export default true
