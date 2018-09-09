// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLInt, GraphQLString, GraphQLObjectType } from 'graphql'

import NodeInterface from '../../../../units/urb-appbase-server/graphql/NodeInterface'
import ResourceUserAllowance from '../model/ResourceUserAllowance'

export default new GraphQLObjectType({
  name: 'ResourceUserAllowance',
  interfaces: [ NodeInterface ],
  isTypeOf: object => object instanceof ResourceUserAllowance,
  fields: {
    id: globalIdField( 'ResourceUserAllowance' ),
    ResourceUserAllowance_Name: {
      type: GraphQLString,
      resolve: obj => obj.ResourceUserAllowance_Name,
    },
    ResourceUserAllowance_MinAmount: {
      type: GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MinAmount,
    },
    ResourceUserAllowance_MinWarning: {
      type: GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MinWarning,
    },
    ResourceUserAllowance_MaxAmount: {
      type: GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MaxAmount,
    },
    ResourceUserAllowance_MaxWarning: {
      type: GraphQLInt,
      resolve: obj => obj.ResourceUserAllowance_MaxWarning,
    },
    ResourceUserAllowance_AllowMiscAsJSON: {
      type: GraphQLString,
      resolve: obj => obj.ResourceUserAllowance_AllowMiscAsJSON,
    },
  },
})
