// @flow

import { connectionDefinitions } from 'graphql-relay'

import UserPermissionForObjectType from './UserPermissionForObjectType'

export default connectionDefinitions({
  name: 'UserPermissionForObjects',
  nodeType: UserPermissionForObjectType,
})
