// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'UserSession', {
  fields: {
    id: 'uuid',
    UserSession_artifact_id: 'uuid',
    UserSession_User_id: 'uuid',
    UserSession_Start: 'timestamp',
    UserSession_Expired: 'boolean',
  },

  key: [ [ 'id' ], 'UserSession_artifact_id', 'UserSession_User_id' ],

  materialized_views: {
    UserSession_by_artifact_id_and_id: {
      select: [ '*' ],
      key: [ [ 'UserSession_artifact_id', 'id' ], 'UserSession_User_id' ],
    },
  },
})

export default true
