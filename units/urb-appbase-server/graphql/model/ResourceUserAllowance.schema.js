// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'ResourceUserAllowance', {
  fields: {
    id: 'uuid',
    ResourceUserAllowance_artifact_id: 'uuid',
    ResourceUserAllowance_user_id: 'uuid',
    ResourceUserAllowance_Name: 'text',
    ResourceUserAllowance_MinAmount: 'int',
    ResourceUserAllowance_MinWarning: 'int',
    ResourceUserAllowance_MaxAmount: 'int',
    ResourceUserAllowance_MaxWarning: 'int',
    ResourceUserAllowance_AllowMiscAsJSON: 'text',
    ResourceUserAllowance_created_by: 'uuid',
    ResourceUserAllowance_created_on: 'timestamp',
    ResourceUserAllowance_modified_by: 'uuid',
    ResourceUserAllowance_modified_on: 'timestamp',
  },
  key: [
    [
      'ResourceUserAllowance_artifact_id',
      'ResourceUserAllowance_user_id',
      'ResourceUserAllowance_Name',
    ],
    'id',
  ],
  materialized_views: {
    ResourceUserAllowance_by_MakerArtifact_id: {
      select: [
        'id',
        'ResourceUserAllowance_artifact_id',
        'ResourceUserAllowance_user_id',
        'ResourceUserAllowance_Name',
        'ResourceUserAllowance_MinAmount',
        'ResourceUserAllowance_MinWarning',
        'ResourceUserAllowance_MaxAmount',
        'ResourceUserAllowance_MaxWarning',
        'ResourceUserAllowance_AllowMiscAsJSON',
        'ResourceUserAllowance_created_by',
        'ResourceUserAllowance_created_on',
        'ResourceUserAllowance_modified_by',
        'ResourceUserAllowance_modified_on',
      ],
      key: [
        [ 'ResourceUserAllowance_artifact_id', 'ResourceUserAllowance_Name' ],
        'ResourceUserAllowance_user_id',
        'id',
      ],
    },
  },
})

export default true
