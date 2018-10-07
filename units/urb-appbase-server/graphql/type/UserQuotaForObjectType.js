// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLInt, GraphQLString, GraphQLObjectType } from 'graphql'

import NodeInterface from '../../../../units/urb-appbase-server/graphql/NodeInterface'
import UserQuotaForObject from '../model/UserQuotaForObject'

export default new GraphQLObjectType({
  name: 'UserQuotaForObject',
  interfaces: [ NodeInterface ],
  isTypeOf: object => object instanceof UserQuotaForObject,
  fields: {
    id: globalIdField( 'UserQuotaForObject' ),
    UserQuotaForObject_Name: {
      type: GraphQLString,
      resolve: obj => obj.UserQuotaForObject_Name,
    },
    UserQuotaForObject_MinAmount: {
      type: GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MinAmount,
    },
    UserQuotaForObject_MinWarning: {
      type: GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MinWarning,
    },
    UserQuotaForObject_MaxAmount: {
      type: GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MaxAmount,
    },
    UserQuotaForObject_MaxWarning: {
      type: GraphQLInt,
      resolve: obj => obj.UserQuotaForObject_MaxWarning,
    },
    UserQuotaForObject_AllowMiscAsJSON: {
      type: GraphQLString,
      resolve: obj => obj.UserQuotaForObject_AllowMiscAsJSON,
    },
  },
})
