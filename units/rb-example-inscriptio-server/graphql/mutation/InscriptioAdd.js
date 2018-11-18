// @flow weak

import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLNonNull } from 'graphql'

import InscriptiosConnection from '../type/InscriptiosConnection'
import ViewerType from '../../../../units/rb-appbase-server/graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'InscriptioAdd',

  inputFields: {
    Inscriptio_LocationLat: { type: new GraphQLNonNull( GraphQLString ) },
    Inscriptio_LocationLon: { type: new GraphQLNonNull( GraphQLString ) },
    Inscriptio_Notes: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    InscriptiosEdge: {
      type: InscriptiosConnection.edgeType,
      resolve: async({ local_id }, { ...args }, context, { rootValue: objectManager }) => {
        const an_Object = await objectManager.getOneObject_async( 'Inscriptio', {
          id: local_id,
        })

        const arr = await objectManager.getObjectList_async( 'Inscriptio', {})

        return {
          cursor: objectManager.cursorForObjectInConnection( 'Inscriptio', arr, an_Object ),
          node: an_Object,
        }
      },
    },

    Viewer: {
      type: ViewerType,
      resolve: ( parent, args, context, { rootValue: objectManager }) =>
        objectManager.getOneObject_async( 'User', {
          id: objectManager.getViewerUserId(),
        }),
    },
  },

  mutateAndGetPayload: async(
    { Inscriptio_LocationLat, Inscriptio_LocationLon, Inscriptio_Notes },
    context,
    { rootValue: objectManager },
  ) => {
    const local_id = await objectManager.add( 'Inscriptio', {
      Inscriptio_LocationLat,
      Inscriptio_LocationLon,
      Inscriptio_Notes,
    })
    return { local_id }
  },
})
