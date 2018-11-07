// @flow

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import ErrorComponent from '../_configuration/rb-appbase-webapp/ErrorComponent'
import log from '../rb-base-server/log'
import { getSiteInformation } from '../_configuration/rb-base-server/siteSettings'

import contentCreatorWebApp_async from './contentCreatorWebApp_async'

// Create express router for the web app
const serverWebApp = express()

serverWebApp.use( async( req, res ) => {
  const reqUrl: string = req.url
  const reqUserAgent: string = req.headers['user-agent']
  const reqUserToken1: ?string = req.cookies.UserToken1

  const siteInformation = await getSiteInformation( req, res )

  if ( siteInformation ) {
    try {
      const content = await contentCreatorWebApp_async(
        siteInformation,
        reqUrl,
        reqUserAgent,
        reqUserToken1,
      )

      if ( content.status === 200 ) {
        res.status( 200 ).send( content.htmlContent )
      } else if ( content.status === 302 ) {
        res.redirect( 302, content.redirectUrl )
      } else if ( content.status === 404 ) {
        res.status( 404 )
      }
    } catch ( err ) {
      log.log({ level: 'error', message: 'Error: Render on server request', details: err })
      res.status( 500 ).send( ReactDOMServer.renderToString( <ErrorComponent httpStatus={500} /> ) )
    }
  } else {
    res.status( 200 ).send( 'disassociated' )
  }
})

export default serverWebApp
