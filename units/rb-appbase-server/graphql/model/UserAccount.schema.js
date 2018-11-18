// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'UserAccount', {
  fields: {
    id: 'uuid',
    UserAccount_artifact_id: 'uuid',
    UserAccount_User_id: 'uuid',
    UserAccount_Identifier: 'text',
    UserAccount_Secret: 'text',
    UserAccount_Type: 'text',
    UserAccount_created_by: 'uuid',
    UserAccount_created_on: 'timestamp',
    UserAccount_modified_by: 'uuid',
    UserAccount_modified_on: 'timestamp',
  },

  key: [ [ 'UserAccount_artifact_id', 'UserAccount_Identifier', 'UserAccount_Type' ], 'id' ],
})

export default true
