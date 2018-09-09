// @flow

import process from 'process'

import '../../units/urb-appbase-server/graphql/schema' // Schema for GraphQL server
import ObjectManager from '../urb-base-server/ObjectManager'

// Guarantee that all object registrations and schema definitions are executed
import '../_configuration/urb-base-server/graphql/_schemas'

ObjectManager.initializePersisters( true, () => {
  process.exit()
})
