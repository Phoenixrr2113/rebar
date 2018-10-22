// @flow

import os from 'os' // Import to demonstrate server-based site settings

import { version } from '../../../package.json'

import defaultPersister from './graphql/defaultPersister'

// Read environment
require( 'dotenv' ).load()

const googleMapsJavascriptAPI = process.env.GOOGLE_MAPS_JAVASCRIPT_API
if ( googleMapsJavascriptAPI == null || typeof googleMapsJavascriptAPI !== 'string' )
  throw new Error(
    'rb-example-inscriptio-webapp requires the environment variable GOOGLE_MAPS_JAVASCRIPT_API to be set',
  )

const siteInformation = {
  artifact_id: defaultPersister.uuidNull(),
  inEditingMode: false,
  isMaDesignerDisabled: true,
  siteConfiguration: {
    webapp: {
      api: { googleMapsJavascriptAPI },
      rebarDemo: { version, OSType: os.type(), OSHostName: os.hostname(), OSFreeMem: os.freemem() },
    },
    server: {},
    builderClient: {},
  },
}

export async function getSiteInformation( req: Object, res: Object ): Object {
  return siteInformation
}
