// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'Ensayo', {
  fields: {
    id: 'uuid',
    Ensayo_artifact_id: 'uuid',
    Ensayo_User_id: 'uuid',
    Ensayo_Content: 'text',
    Ensayo_Description: 'text',
    Ensayo_Title: 'text',
  },

  indexes: [ 'Ensayo_User_id' ],

  key: [ 'id' ],

  // custom_indexes: [
  //   {
  //     on: 'Ensayo_User_id',
  //     using: 'org.apache.cassandra.index.sasi.SASIIndex',
  //     options: {},
  //   },
  // ],
})

export default true
