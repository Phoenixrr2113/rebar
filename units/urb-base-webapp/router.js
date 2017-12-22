// @flow

import queryMiddleware from 'farce/lib/queryMiddleware'
import makeRouteConfig from 'found/lib/makeRouteConfig'
import { Resolver } from 'found-relay'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import Routes from '../_configuration/urb-base-webapp/Routes'

export const historyMiddlewares = [ queryMiddleware ]

export function createResolver( fetcher: any ) {
  const environment = new Environment({
    network: Network.create( ( ...args ) => fetcher.fetch( ...args ) ),
    store: new Store( new RecordSource() ),
  })

  return new Resolver( environment )
}

export function routeConfig( siteConfiguration: Object ) {
  return makeRouteConfig( Routes )
}
