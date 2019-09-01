// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('Translaticiarum', {
  fields: {
    id: 'uuid',
    Translaticiarum_artifact_id: 'uuid',
    Translaticiarum_user_id: 'uuid',
    Translaticiarum_Stop: 'timestamp',
    Translaticiarum_Start: 'timestamp',
    Translaticiarum_Description: 'text',
  },

  key: [ 'Translaticiarum_user_id', 'id' ],
})

export default true
