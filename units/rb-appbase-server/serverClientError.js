// @flow

import bodyParser from 'body-parser'
import express from 'express'

import log from '../rb-base-server/log'
import { getObjectManager } from '../rb-base-server/ObjectManager'

import { getUserAndSessionIDByUserToken1_async } from './checkCredentials'

// Read environment
require( 'dotenv' ).load()

//

const serverClientError = express()

serverClientError.use( bodyParser.json() )

//

async function report( req, res ) {
  let step = 'initialize'

  try {
    const objectManager = await getObjectManager( req, res )

    if ( !objectManager.siteInformation ) {
      throw new Error( 'Site information not found' )
    }

    await getUserAndSessionIDByUserToken1_async( objectManager, req, true )

    // Indicate to not include body, since it is meaningless for www errors
    req.body.__DO_NOT_INCLUDE__ = true

    log( 'error', 'WWW', {
      objectManager,
      req,
      err: req.body.err,
      err_info: req.body.err_info,
    })

    res.json({ success: true, issueId: 'XXX aBcDeFg' })
  } catch ( err ) {
    log( 'error', 'rb-appbase-server serverClientError report: Failed', {
      step,
      err,
      body: req.body,
    })
    res.status( 500 ).send(
      JSON.stringify({
        error: 'Could not record error from client',
      }),
    )
  }
}
serverClientError.post( '/report', report )

export default serverClientError
