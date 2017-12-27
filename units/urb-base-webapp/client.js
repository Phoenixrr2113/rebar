// @flow

// In order to use ES7 async/await
import 'babel-polyfill'

import BrowserProtocol from 'farce/lib/BrowserProtocol'
import createInitialFarceRouter from 'found/lib/createInitialFarceRouter'
import createRender from 'found/lib/createRender'
import React from 'react'
import ReactDOM from 'react-dom'

import getGraphQLServerURL from '../_configuration/urb-base-webapp/getGraphQLServerURL'
import AppWrapper from '../_configuration/urb-base-webapp/AppWrapper'

import FetcherClient from './fetcherClient'
import { createResolver, historyMiddlewares, routeConfig } from './router'

// Include global CSS used in all units. Will not be chunked
import '../_configuration/urb-base-webapp/global.css'

const render = createRender({})

//
;( async() => {
  // eslint-disable-next-line no-underscore-dangle
  const fetcher = new FetcherClient(
    getGraphQLServerURL(),
    window.__RELAY_PAYLOADS__,
    window.__RELAY_PAYLOADS__[0].data.Viewer.UserToken2, // It is critical that the app frame has UserToken2 retrieved
  )
  const resolver = createResolver( fetcher )

  const Router = await createInitialFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares,
    routeConfig: routeConfig( window.__siteConfiguration__ ),
    resolver,
    render,
  })

  // $FlowIssue for reason unknow flow does not see ReactDOM.hydrate.
  ReactDOM.hydrate(
    <AppWrapper siteConfiguration={window.__siteConfiguration__} url={document.location.href}>
      <Router resolver={resolver} />
    </AppWrapper>,
    document.getElementById( 'root' ),
    () => {
      // TODO x0100 Research if removal of styles if necessary
      // Previous version of react required removing of JSS styles but the new one seems to handle
      // them OK.
      // // We don't need the static css any more once we have launched our application.
      // const ssStyles = document.getElementById( 'server-side-styles' )
      // // $FlowIssue it is guaranteed to be there
      // ssStyles.parentNode.removeChild( ssStyles )
    },
  )
})()
