// @flow

import { connectionDefinitions } from 'graphql-relay'

import ResourceUserAllowanceType from './ResourceUserAllowanceType'

export default connectionDefinitions({
  name: 'ResourceUserAllowances',
  nodeType: ResourceUserAllowanceType,
})
