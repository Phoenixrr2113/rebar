// @flow

import process from 'process'

import '../../units/rb-appbase-server/graphql/schema' // Schema for GraphQL server
import ObjectManager from '../rb-base-server/ObjectManager'

// Guarantee that all object registrations and schema definitions are executed
import '../_configuration/rb-base-server/graphql/_schemas'

ObjectManager.initializePersisters( true, () => {
  process.exit()
})
