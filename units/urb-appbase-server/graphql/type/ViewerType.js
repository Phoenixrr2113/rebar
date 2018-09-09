// @flow

import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql'
import { connectionArgs, connectionFromArray, fromGlobalId, globalIdField } from 'graphql-relay'

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'
import NodeInterface from '../NodeInterface'
import _ViewerFields from '../../../_configuration/urb-base-server/graphql/_ViewerFields'
import User from '../../../_configuration/urb-base-server/graphql/model/User'

import ObjectUserPermissionsConnection from './ObjectUserPermissionsConnection'
import ObjectUserPermissionType from './ObjectUserPermissionType'
import ResourceUserAllowancesConnection from './ResourceUserAllowancesConnection'
import ResourceUserAllowanceType from './ResourceUserAllowanceType'

export default new GraphQLObjectType({
  name: 'Viewer',
  interfaces: [ NodeInterface ],
  isTypeOf: object => object instanceof User,
  fields: {
    id: globalIdField( 'Viewer' ),
    User_IsAnonymous: {
      type: GraphQLBoolean,
      resolve: obj => defaultPersister.uuidEquals( obj.id, defaultPersister.uuidNull() ),
    },
    UserToken2: { type: GraphQLString, resolve: obj => obj.UserToken2 },
    User_DisplayName: {
      type: GraphQLString,
      resolve: obj => obj.User_DisplayName,
    },
    User_Email: { type: GraphQLString, resolve: obj => obj.User_Email },
    User_PhoneNumberMobile: {
      type: GraphQLString,
      resolve: obj => obj.User_PhoneNumberMobile,
    },

    ObjectUserPermissions: {
      type: ObjectUserPermissionsConnection.connectionType,

      args: {
        ...connectionArgs,
        ObjectUserPermission_Name: { type: new GraphQLNonNull( GraphQLString ) },
      },

      resolve: async( obj, { ...args }, context, { rootValue: objectManager }) => {
        const { ObjectUserPermission_Name } = args
        const arr = await objectManager.getObjectList( 'ObjectUserPermission', {
          ObjectUserPermission_Name,
        })
        return connectionFromArray( arr, args )
      },
    },

    ObjectUserPermission: {
      type: ObjectUserPermissionType,

      args: { ...{ id: { type: GraphQLID } } },

      resolve: async( parent, { id }, context, { rootValue: objectManager }) => {
        const local_id = objectManager.uuidFromString( 'ObjectUserPermission', fromGlobalId( id ).id )

        return await objectManager.getOneObject( 'ObjectUserPermission', {
          id: local_id,
          _materialized_view: 'ObjectUserPermission_by_ID',
        })
      },
    },

    ResourceUserAllowances: {
      type: ResourceUserAllowancesConnection.connectionType,

      args: { ...connectionArgs },

      resolve: async( obj, { ...args }, context, { rootValue: objectManager }) => {
        const arr = await objectManager.getObjectList( 'ResourceUserAllowance', {})
        return connectionFromArray( arr, args )
      },
    },

    ResourceUserAllowance: {
      type: ResourceUserAllowanceType,

      args: { ...{ id: { type: GraphQLID } } },

      resolve: async( parent, { id }, context, { rootValue: objectManager }) => {
        const local_id = objectManager.uuidFromString( 'ResourceUserAllowance', fromGlobalId( id ).id )

        return await objectManager.getOneObject( 'ResourceUserAllowance', {
          id: local_id,

          _materialized_view: 'ResourceUserAllowance_by_ID',
        })
      },
    },

    ..._ViewerFields,
  },
})
