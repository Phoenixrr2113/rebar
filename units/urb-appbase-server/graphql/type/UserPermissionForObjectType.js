// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLBoolean, GraphQLString, GraphQLObjectType } from 'graphql'

import NodeInterface from '../../../../units/urb-appbase-server/graphql/NodeInterface'
import UserPermissionForObject from '../model/UserPermissionForObject'

export default new GraphQLObjectType({
  name: 'UserPermissionForObject',
  interfaces: [ NodeInterface ],
  isTypeOf: object => object instanceof UserPermissionForObject,
  fields: {
    id: globalIdField( 'UserPermissionForObject' ),
    UserPermissionForObject_ObjectType: {
      type: GraphQLString,
      resolve: obj => obj.UserPermissionForObject_ObjectType,
    },
    UserPermissionForObject_object_id: {
      type: GraphQLString,
      resolve: obj => obj.UserPermissionForObject_object_id,
    },
    UserPermissionForObject_PermitRead: {
      type: GraphQLBoolean,
      resolve: obj => obj.UserPermissionForObject_PermitRead,
    },
    UserPermissionForObject_PermitUpdate: {
      type: GraphQLBoolean,
      resolve: obj => obj.UserPermissionForObject_PermitUpdate,
    },
    UserPermissionForObject_PermitDelete: {
      type: GraphQLBoolean,
      resolve: obj => obj.UserPermissionForObject_PermitDelete,
    },
    UserPermissionForObject_PermitMiscAsJSON: {
      type: GraphQLString,
      resolve: obj => obj.UserPermissionForObject_PermitMiscAsJSON,
    },
  },
})
