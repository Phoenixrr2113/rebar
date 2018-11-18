// @flow

import bodyParser from 'body-parser'
import express from 'express'
import graphQLHTTP from 'express-graphql'

import log from '../rb-base-server/log'
import { requestLoggerGraphQL } from '../_configuration/rb-base-server/requestLoggers'
import logServerRequest from '../rb-base-server/logServerRequest'
import { getObjectManager } from '../rb-base-server/ObjectManager'

import {
  getUserAndSessionIDByUserToken1_async,
  verifyUserToken2,
  serveAuthenticationFailed,
} from './checkCredentials'
import schema from './graphql/schema' // Schema for GraphQL server

// Guarantee that all object registrations and schema definitions are executed
import '../_configuration/rb-base-server/graphql/_schemas'

// Create router for GraphQL
const serverGraphQL = express()

// Set up parser
serverGraphQL.use( bodyParser.json() )

// Set up logging
serverGraphQL.use( ( req, res, next ) => logServerRequest( req, res, next, requestLoggerGraphQL ) )

//

function graphQLError( message ) {
  return JSON.stringify({
    errors: [
      {
        message,
        locations: [
          {
            line: 888,
            column: 777,
          },
        ],
        stack: 'No stack information available',
        path: [ 'node' ],
      },
    ],
    data: null,
  })
}

//

async function root( req, res, next ) {
  try {
    const objectManager = await getObjectManager( req, res )

    const UserAndSession = await getUserAndSessionIDByUserToken1_async( objectManager, req, true )
    if ( !UserAndSession ) {
      res
        .status( 500 )
        .send( graphQLError( 'GraphQL server was given a session, but the session is invalid' ) )
      return
    }

    const a_User = UserAndSession.User
    const a_UserSession = UserAndSession.UserSession

    res.injectedByRebarFrameworks = { userSession: a_UserSession }

    const verificationIssue = verifyUserToken2( a_User, req )
    if ( verificationIssue ) {
      serveAuthenticationFailed( req, res, verificationIssue, true )
      return
    }

    graphQLHTTP( () => {
      return {
        schema: schema,
        rootValue: objectManager,
        pretty: true,
        graphiql: false, // TODO [Sandstone][server] Look into re-enabling GraphiQL
      }
    })( req, res, next )
  } catch ( err ) {
    log( 'error', 'rb-appbase-server serverGraphQL root: Failed ', { err })
    res.status( 500 ).send( graphQLError( 'An error has occurred while running GraphQL query' ) )
  }
}
serverGraphQL.use( '/', root )

export default serverGraphQL
