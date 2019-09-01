// @flow

import defaultPersister from '../../../_configuration/rb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('ToDo', {
  fields: {
    id: 'uuid',
    ToDo_artifact_id: 'uuid',
    ToDo_user_id: 'uuid',
    ToDo_Text: 'text',
    ToDo_Complete: 'boolean',
  },

  key: [ [ 'ToDo_artifact_id', 'ToDo_user_id' ], 'id' ],
})

export default true
