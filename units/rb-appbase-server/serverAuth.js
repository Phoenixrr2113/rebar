// @flow

import bcryptjs from 'bcryptjs'
import bodyParser from 'body-parser'
import express from 'express'
import jwt from 'jwt-simple'

import authExtensions from '../_configuration/rb-base-server/authExtensions'
import delayPromise from '../rb-base-universal/delayPromise'
import getNewUser from '../_configuration/rb-base-server/graphql/model/getNewUser'
import onCreateUser from '../_configuration/rb-appbase-server/onCreateUser'
import { validateEmail } from '../rb-base-universal/validation'
import { requestLoggerAuth } from '../_configuration/rb-base-server/requestLoggers'
import logServerRequest from '../rb-base-server/logServerRequest'
import { getObjectManager } from '../rb-base-server/ObjectManager'

import { getUserAndSessionIDByUserToken1 } from './checkCredentials'

// Read environment
require( 'dotenv' ).load()

const serverAuth = express()

serverAuth.use( bodyParser.json() )
serverAuth.use( ( req, res, next ) => logServerRequest( req, res, next, requestLoggerAuth ) )

//

async function login( req, res ) {
  // $AssureFlow yes, the Object Manager will have all the fields
  const objectManager = await getObjectManager( req, res )

  // TODO [3 Sandstone][server] Provide error handling when ObjectManager does not contain site information
  if ( objectManager.siteInformation ) {
    const UserAccount_Identifier = req.body.UserAccount_Identifier.toLowerCase()
    const User_Secret = req.body.User_Secret

    await delayPromise( 1000 ) // Wait for a second to hamper a possible potential brute force attack

    try {
      const arr_UserAccount = await objectManager.getObjectList_async( 'UserAccount', {
        UserAccount_artifact_id: objectManager.siteInformation.artifact_id,
        UserAccount_Identifier,
      })

      if ( arr_UserAccount.length === 0 ) {
        res.status( 401 ).json({ error: 'User account not found' })
      } else {
        const a_User = await objectManager.getOneObject_async( 'User', {
          id: arr_UserAccount[0].UserAccount_User_id,
        })
        if (
          await new Promise( resolve =>
            bcryptjs.compare( User_Secret, a_User.User_Secret, ( err, passwordMatch ) =>
              resolve( passwordMatch ),
            ),
          )
        ) {
          // Create user session object
          const a_UserSession = {
            UserSession_artifact_id: objectManager.siteInformation.artifact_id, // Get previously assigned primary key
            UserSession_User_id: a_User.id,
            UserSession_Start: new Date(),
            UserSession_Expired: false,
          }

          // Addsession to database
          await objectManager.add( 'UserSession', a_UserSession )
          res.codeFoundriesInjected = { user: a_User }

          // User has authenticated correctly thus we create a JWT token ith the session.
          const UserToken1 = jwt.encode(
            // $AssureFlow - id will be filled in by ObjectManager.add
            { session_id: a_UserSession.id },
            process.env.JWT_SECRET,
          )

          res.cookie( 'UserToken1', UserToken1, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
          })
          res.json({ success: true, UserToken2: a_User.UserToken2 })
        } else res.status( 401 ).json({ error: 'Incorrect password' })
      }
    } catch ( error ) {
      res.status( 401 ).json({ error: error.message })
    }
  }
}
serverAuth.post( '/login', login )

async function createuser( req, res ) {
  const objectManager = await getObjectManager( req, res )

  if ( objectManager.siteInformation ) {
    const UserAccount_Identifier = req.body.UserAccount_Identifier.toLowerCase()
    const User_Secret = req.body.User_Secret

    try {
      const arr_UserAccount = await objectManager.getObjectList_async( 'UserAccount', {
        UserAccount_artifact_id: objectManager.siteInformation.artifact_id,
        UserAccount_Identifier,
      })

      if ( arr_UserAccount.length > 0 ) throw new Error( 'User account already exists' )
      const User_PasswordHash = await new Promise( resolve =>
        bcryptjs.hash( User_Secret, 8, ( err, hash ) => resolve( hash ) ),
      )

      // If account name looks like email address, use it as email
      const accountNameIsValidEmail = validateEmail( UserAccount_Identifier )
      const User_Email = accountNameIsValidEmail ? UserAccount_Identifier : ''

      // Create the user object
      const a_User = Object.assign( getNewUser( objectManager.siteInformation.artifact_id ), {
        User_artifact_id: objectManager.siteInformation.artifact_id,
        UserToken2:
          Math.random()
            .toString( 36 )
            .substring( 2 ) +
          Math.random()
            .toString( 36 )
            .substring( 2 ),
        User_Secret: User_PasswordHash,
        User_DisplayName: UserAccount_Identifier,
        User_Email: User_Email,
      })
      objectManager.assignPrimaryKey( 'User', a_User )

      // Create user session object
      const a_UserSession = {
        UserSession_artifact_id: objectManager.siteInformation.artifact_id,

        // Get previously assigned primary key
        UserSession_User_id: a_User.id,
        UserSession_Start: new Date(),
        UserSession_Expired: false,
      }

      // Create user account object
      const a_UserAccount = {
        UserAccount_artifact_id: objectManager.siteInformation.artifact_id,

        // Get previously assigned primary key
        UserAccount_User_id: a_User.id,
        UserAccount_Identifier,
        UserAccount_Type: 'un',
      }

      // Add user and session to database
      await Promise.all([
        objectManager.add( 'User', a_User ),
        objectManager.add( 'UserSession', a_UserSession ),
        objectManager.add( 'UserAccount', a_UserAccount ),
        ...onCreateUser( a_User.id, objectManager ),
      ])

      res.codeFoundriesInjected = { user: a_User }

      // User has been created thus we create a JWT token.
      const UserToken1 = jwt.encode(
        // $AssureFlow - id will be filled in by ObjectManager.add
        { session_id: a_UserSession.id },
        process.env.JWT_SECRET,
      )

      // Set cookie and return
      res.cookie( 'UserToken1', UserToken1, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
      res.json({ success: true })
    } catch ( error ) {
      console.log( error )
      res.status( 401 ).json({ error: '' + error.message })
    }
  }
}
serverAuth.post( '/createuser', createuser )

serverAuth.post( '/logout', async( req, res ) => {
  const objectManager = await getObjectManager( req, res )
  const UserSession = ( await getUserAndSessionIDByUserToken1( objectManager, req ) ).UserSession

  await objectManager.remove( 'UserSession', {
    id: UserSession.id,
  })

  res.cookie( 'UserToken1', '', { httpOnly: true, expires: new Date( 1 ) })
  res.json({ success: true })
})

// Add extensions - custom configurations
authExtensions( serverAuth )
export default serverAuth
