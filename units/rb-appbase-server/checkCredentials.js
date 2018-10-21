// @flow weak

import path from 'path'

import jwt from 'jwt-simple'

import defaultPersister from '../_configuration/rb-base-server/graphql/defaultPersister'
import UserToken2ServerRendering from '../_configuration/rb-base-server/UserToken2ServerRendering'
import log from '../rb-base-server/log'

// Read environment
require( 'dotenv' ).load()

const envHost = process.env.HOST
if ( envHost == null || typeof envHost !== 'string' )
  throw new Error( 'Error: rb-appbase-webapp requires the environment variable HOST to be set' )

function getSessionIdFromRequest( req: Object ): ?string {
  const UserToken1 = req.cookies.UserToken1 || req.headers.usertoken1
  if ( UserToken1 )
    try {
      if ( UserToken1.length > 10 ) {
        const decoded = jwt.decode( UserToken1, process.env.JWT_SECRET )
        return defaultPersister.uuidFromString( decoded.session_id )
      }
    } catch ( err ) {
      // Do nothing. This most probably means an expired session, or
      // new session secret. Either way the user is consindered not logged in
    }
  return null // Anonymous, unless cookie is passed
}

export async function getUserAndSessionIDByUserToken1( objectManager, req ) {
  // Get session, and if session is present, user from session
  const session_id = getSessionIdFromRequest( req )
  let a_UserSession = null

  if ( session_id )
    a_UserSession = await objectManager.getOneObject_async( 'UserSession', {
      id: session_id,
      UserSession_artifact_id: objectManager.siteInformation.artifact_id,

      _materialized_view: 'UserSession_by_artifact_id_and_id',
    })

  const user_id = a_UserSession ? a_UserSession.UserSession_User_id : defaultPersister.uuidNull()

  const a_User = await objectManager.getOneObject_async( 'User', {
    id: user_id,
    User_artifact_id: objectManager.siteInformation.artifact_id,
  })

  if ( a_User ) {
    objectManager.setViewerUserId( user_id )
    return { User: a_User, UserSession: a_UserSession }
  } else {
    throw new Error( 'User ' + JSON.stringify( user_id ) + ' not found' )
  }
}

export function verifyUserAuthToken( a_User, req ) {
  if ( !a_User ) return Promise.reject( 'User not found' )
  else {
    const request_UserToken2 = req.get( 'UserToken2' )
    if (
      request_UserToken2 === a_User.UserToken2 ||
      // A request coming from webapp will come from localhost and will bear the server's user token
      ( ( req.ip === '127.0.0.1' || req.ip === envHost ) &&
        request_UserToken2 === UserToken2ServerRendering ) ||
      // For use with GraphiQL
      process.env.USER_TOKEN_2_BYPASS_IP === req.ip
    )
      return Promise.resolve( a_User.id )
    else
      return Promise.reject(
        'Authentication token expected: ' + a_User.UserToken2 + ', provided:' + request_UserToken2,
      )
  }
}

const httpError403FileName = path.resolve(
  __dirname,
  '../_configuration/rb-base-server/httpError/403.html',
)

export function serveAuthenticationFailed( req, res, err, respondWithJSON ) {
  // Collect information about the request
  var ip = req.headers['x-real-ip'] || req.connection.remoteAddress
  const requestDetails = {
    headers: req.headers,
    cookies: req.cookies,
    ip: ip,
    query: req.body,
  }

  log.log({
    level: 'warn',
    message: 'Checking credentials failed',
    details: err.message
      ? { errorMessage: err.message, errorStack: err.stack, requestDetails }
      : { err, requestDetails },
  })

  // Expire cookie. This is the only way to 'delete' a cookie
  res.cookie( 'UserToken1', '', { httpOnly: true, expires: new Date( 1 ) })

  if ( respondWithJSON ) {
    res.status( 403 ).send( '{ "error": "Authentication Failed" }' )
  } else {
    res.status( 403 ).sendFile( httpError403FileName )
  }
}
