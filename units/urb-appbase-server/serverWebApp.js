// @flow

import path from 'path'

import createRender from 'found/lib/createRender'
import { getFarceResult } from 'found/lib/server'
import express from 'express'
import Helmet from 'react-helmet'
import React from 'react'
import { JssProvider, SheetsRegistry } from 'react-jss'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'

import AppWrapper from '../_configuration/urb-appbase-webapp/AppWrapper'
import ErrorComponent from '../_configuration/urb-appbase-webapp/ErrorComponent'
import getGraphQLLocalServerURL from '../_configuration/urb-base-server/getGraphQLLocalServerURL'
import { getSiteInformation } from '../_configuration/urb-base-server/siteSettings'
import log from '../urb-base-server/log'
import { version } from '../_configuration/package'
import UserToken2ServerRendering from '../_configuration/urb-base-server/UserToken2ServerRendering'
import htmlHeadAdditions from '../_configuration/urb-appbase-webapp/htmlHeadAdditions'
import type { SiteInformation } from '../urb-appbase-server/types/SiteInformation.types'
import { createResolver, historyMiddlewares, routeConfig } from '../urb-appbase-webapp/router'

import FetcherServer from './fetcherServer'

// Read environment
require( 'dotenv' ).load()

const envHost = process.env.HOST
if ( envHost == null || typeof envHost !== 'string' )
  throw new Error( 'Error: urb-appbase-webapp requires the environment variable HOST to be set' )

const envPort = process.env.PORT
if ( envPort == null || typeof envPort !== 'string' )
  throw new Error( 'Error: urb-appbase-webapp requires the environment variable PORT to be set' )

// Create express router for the web app
const serverWebApp = express()

async function gatherLocationAndSiteInformation(
  req: Object,
  res: Object,
): Promise<?{ siteInformation: SiteInformation, assetsPath: string }> {
  let assetsPath
  const siteInformation = await getSiteInformation( req, res )
  if ( siteInformation ) {
    if ( process.env.NODE_ENV === 'production' ) {
      assetsPath =
        siteInformation.isCfMakerDisabled || siteInformation.inEditingMode
          ? // When editing in production, use the assets with the configuration readign code intact (built when cutting a site version)
            `/assets/${version}`
          : // When in production mode, serve the assets compiled by maker
            `/sassets/${version}.${siteInformation.siteConfiguration.version}`
    } else {
      // Get webpack port only in development. In production it can be omitted
      const envPortWebpack = process.env.PORT_WEBPACK
      if ( envPortWebpack == null || typeof envPortWebpack !== 'string' )
        throw new Error(
          'Error: urb-appbase-webapp requires the environment variable PORT_WEBPACK to be set',
        )

      // When in development, always go to webpack over http
      assetsPath = `http://${envHost}:${envPortWebpack}/${version}`
    }

    return { siteInformation, assetsPath }
  } else return null
}

const render = createRender({
  renderError( obj: Object ): React$Element<*> {
    const { error } = obj
    if ( error.status !== 404 )
      log.log( 'error', 'Error: Render on server createRender renderError', obj )
    return <ErrorComponent httpStatus={error.status} />
  },
})

serverWebApp.use( async( req, res ) => {
  try {
    const siteInformationAndAssets = await gatherLocationAndSiteInformation( req, res )
    if ( siteInformationAndAssets ) {
      const { siteInformation, assetsPath } = siteInformationAndAssets

      // It is possible that artifact_id can not be determined during development. For instance, when browsing
      // the project on localhost using a specific port, Chrome will request robots.txt and favicon.ico and
      // they will not have the proper dev-host header. In this case simply report the file missing.
      // This does not affect operation in production, since host will be passed for all requests.
      if ( !siteInformation ) {
        res.status( 404 )
        return
      }

      const fetcher = new FetcherServer(
        `http://${envHost}:${envPort}` + getGraphQLLocalServerURL( siteInformation ),
        req.cookies.UserToken1,
        UserToken2ServerRendering,
      )

      const userAgent = req.headers['user-agent']
      const { siteConfiguration } = siteInformation
      const siteConfigurationSubset = {
        webapp: siteConfiguration.webapp,
        builder: siteConfiguration.builder,
      }

      const siteRouteConfig = routeConfig( siteConfigurationSubset )

      const { redirect, element } = await getFarceResult({
        url: req.url,
        historyMiddlewares,
        routeConfig: siteRouteConfig,
        resolver: createResolver( fetcher ),
        render,
      })

      if ( redirect ) {
        res.redirect( 302, redirect.url )
        return
      }

      const relayPayload = serialize( fetcher, { isJSON: true })

      const sheets = new SheetsRegistry()
      const helmet = Helmet.rewind()

      const rootHTML = ReactDOMServer.renderToString(
        <JssProvider registry={sheets}>
          <AppWrapper
            userAgent={userAgent}
            siteConfiguration={siteConfigurationSubset}
            url={req.url}
          >
            {element}
          </AppWrapper>
        </JssProvider>,
      )

      res.render( path.resolve( __dirname, 'html.ejs' ), {
        assets_path: assetsPath,
        root_html: rootHTML,
        server_side_styles: sheets.toString(),
        helmet,
        htmlHeadAdditions,
        siteConfiguration: JSON.stringify( siteConfigurationSubset ),
        relay_payload: relayPayload,
      })
    } else {
      res.status( 200 ).send( 'meh' )
    }
  } catch ( err ) {
    log.log( 'error', 'Error: Render on server request', err )
    res.status( 500 ).send( ReactDOMServer.renderToString( <ErrorComponent httpStatus={500} /> ) )
  }
})
export default serverWebApp
