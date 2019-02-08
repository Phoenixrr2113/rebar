// @flow

import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLNonNull } from 'graphql'

import ViewerType from '../../../rb-appbase-server/graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'UserUpdate',

  inputFields: {
    User_DisplayName: { type: new GraphQLNonNull( GraphQLString ) },
    User_PrimaryEmail: { type: new GraphQLNonNull( GraphQLString ) },
    User_PrimaryPhone: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    Viewer: {
      type: ViewerType,
      resolve: ( params, { ...args }, context, { rootValue: objectManager }) =>
        objectManager.getOneObject_async( 'User', { id: objectManager.getViewerUserId() }),
    },
  },

  mutateAndGetPayload: async(
    { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone },
    context,
    { rootValue: objectManager },
  ) => {
    await objectManager.update( 'User', {
      id: objectManager.getViewerUserId(),
      User_DisplayName,
      User_PrimaryEmail,
      User_PrimaryPhone,
    })

    return {}
  },
})
