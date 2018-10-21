// @flow

import { GraphQLObjectType } from 'graphql'

import _mutations from '../../../_configuration/rb-base-server/graphql/_mutations'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: { ..._mutations },
})
