// @flow

import ObjectManager from '../../../../units/rb-base-server/ObjectManager'

// Class used by GraphQL Server
export default class UserSession {
  id: string
  UserSession_artifact_id: string
  UserSession_User_id: string
  UserSession_Start: Date
  UserSession_Expired: boolean
  UserSession_IsAnonymous: boolean
  UserSession_created_by: string
  UserSession_created_on: Date
  UserSession_modified_by: string
  UserSession_modified_on: Date

  constructor( fields: {
    id: string,
    UserSession_artifact_id: string,
    UserSession_User_id: string,
    UserSession_Start: Date,
    UserSession_Expired: boolean,
    UserSession_IsAnonymous: boolean,
    UserSession_created_by: string,
    UserSession_created_on: Date,
    UserSession_modified_by: string,
    UserSession_modified_on: Date,
  }) {
    this.id = fields.id
    this.UserSession_artifact_id = fields.UserSession_artifact_id
    this.UserSession_User_id = fields.UserSession_User_id
    this.UserSession_Start = fields.UserSession_Start
    this.UserSession_Expired = fields.UserSession_Expired
    this.UserSession_IsAnonymous = fields.UserSession_IsAnonymous
    this.UserSession_created_by = fields.UserSession_created_by
    this.UserSession_created_on = fields.UserSession_created_on
    this.UserSession_modified_on = fields.UserSession_modified_on
    this.UserSession_modified_by = fields.UserSession_modified_by
  }
}

ObjectManager.registerEntity( 'UserSession', UserSession, {})
