// @flow

import { connectionDefinitions } from 'graphql-relay'

import ObjectUserPermissionType from './ObjectUserPermissionType'

export default connectionDefinitions({
  name: 'ObjectUserPermissions',
  nodeType: ObjectUserPermissionType,
})
