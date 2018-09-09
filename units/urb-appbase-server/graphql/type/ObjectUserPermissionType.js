// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLBoolean, GraphQLString, GraphQLObjectType } from 'graphql'

import NodeInterface from '../../../../units/urb-appbase-server/graphql/NodeInterface'
import ObjectUserPermission from '../model/ObjectUserPermission'

export default new GraphQLObjectType({
  name: 'ObjectUserPermission',
  interfaces: [ NodeInterface ],
  isTypeOf: object => object instanceof ObjectUserPermission,
  fields: {
    id: globalIdField( 'ObjectUserPermission' ),
    ObjectUserPermission_Name: {
      type: GraphQLString,
      resolve: obj => obj.ObjectUserPermission_Name,
    },
    ObjectUserPermission_PermitCreate: {
      type: GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitCreate,
    },
    ObjectUserPermission_PermitRead: {
      type: GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitRead,
    },
    ObjectUserPermission_PermitUpdate: {
      type: GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitUpdate,
    },
    ObjectUserPermission_PermitDelete: {
      type: GraphQLBoolean,
      resolve: obj => obj.ObjectUserPermission_PermitDelete,
    },
    ObjectUserPermission_PermitMiscAsJSON: {
      type: GraphQLString,
      resolve: obj => obj.ObjectUserPermission_PermitMiscAsJSON,
    },
  },
})
