// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('Translaticiarum', {
  fields: {
    id: 'uuid',
    Translaticiarum_artifact_id: 'uuid',
    Translaticiarum_User_id: 'uuid',
    Translaticiarum_Stop: 'timestamp',
    Translaticiarum_Start: 'timestamp',
    Translaticiarum_Description: 'text'
  },

  key: ['Translaticiarum_User_id', 'id']
})

export default true
