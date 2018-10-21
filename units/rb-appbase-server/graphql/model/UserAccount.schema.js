// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'UserAccount', {
  fields: {
    id: 'uuid',
    UserAccount_artifact_id: 'uuid',
    UserAccount_User_id: 'uuid',
    UserAccount_Identifier: 'text',
    UserAccount_Type: 'text',
  },

  key: [ [ 'UserAccount_artifact_id', 'UserAccount_Identifier' ], 'id' ],
})

export default true
