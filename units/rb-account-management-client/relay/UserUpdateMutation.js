// @flow weak

import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation UserUpdateMutation($input: UserUpdateInput!) {
    UserUpdate(input: $input) {
      Viewer {
        User_DisplayName
        User_PrimaryEmail
        User_PrimaryPhone
      }
    }
  }
`

function getOptimisticResponse( User_DisplayName, User_PrimaryEmail, User_PrimaryPhone ) {
  return {
    UserUpdate: {
      User: {
        User_DisplayName,
        User_PrimaryEmail,
        User_PrimaryPhone,
      },
    },
  }
}

function commit( environment, User_DisplayName, User_PrimaryEmail, User_PrimaryPhone ) {
  return commitMutation( environment, {
    mutation,

    variables: {
      input: {
        User_DisplayName,
        User_PrimaryEmail,
        User_PrimaryPhone,
      },
    },

    optimisticResponse: getOptimisticResponse(
      User_DisplayName,
      User_PrimaryEmail,
      User_PrimaryPhone,
    ),
  })
}

export default { commit }
