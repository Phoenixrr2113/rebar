// @flow weak

import { GraphQLID } from 'graphql'
import {
  fromGlobalId,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay'

import TranslaticiarumsConnection from './TranslaticiarumsConnection'
import TranslaticiarumType from './TranslaticiarumType'

export default {
  Translaticiarums: {
    type: TranslaticiarumsConnection.connectionType,

    args: { ...connectionArgs },

    resolve: async (
      obj,
      { ...args },
      context,
      { rootValue: objectManager },
    ) => {
      const arr = await objectManager.getObjectList_async('Translaticiarum', {})

      return connectionFromArray(arr, args)
    },
  },

  Translaticiarum: {
    type: TranslaticiarumType,

    args: { ...{ id: { type: GraphQLID } } },

    resolve: (parent, { id }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject_async('Translaticiarum', {
        id: fromGlobalId(id).id,
      }),
  },
}
