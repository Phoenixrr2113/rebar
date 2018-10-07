// @flow

import { connectionDefinitions } from 'graphql-relay'

import UserQuotaForObjectType from './UserQuotaForObjectType'

export default connectionDefinitions({
  name: 'UserQuotaForObjects',
  nodeType: UserQuotaForObjectType,
})
