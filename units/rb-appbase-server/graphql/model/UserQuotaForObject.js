// @flow

import ObjectManager from '../../../../units/rb-base-server/ObjectManager'

// Class used by GraphQL Server
export default class UserQuotaForObject {
  id: string
  UserQuotaForObject_artifact_id: string
  UserQuotaForObject_user_id: string
  UserQuotaForObject_Name: string
  UserQuotaForObject_MinAmount: number
  UserQuotaForObject_MinWarning: number
  UserQuotaForObject_MaxAmount: number
  UserQuotaForObject_MaxWarning: number
  UserQuotaForObject_AllowMiscAsJSON: string
  UserQuotaForObject_created_by: string
  UserQuotaForObject_created_on: Date
  UserQuotaForObject_modified_by: string
  UserQuotaForObject_modified_on: Date

  constructor( fields: {
    id: string,
    UserQuotaForObject_artifact_id: string,
    UserQuotaForObject_user_id: string,
    UserQuotaForObject_Name: string,
    UserQuotaForObject_MinAmount: number,
    UserQuotaForObject_MinWarning: number,
    UserQuotaForObject_MaxAmount: number,
    UserQuotaForObject_MaxWarning: number,
    UserQuotaForObject_AllowMiscAsJSON: string,
    UserQuotaForObject_created_by: string,
    UserQuotaForObject_created_on: Date,
    UserQuotaForObject_modified_by: string,
    UserQuotaForObject_modified_on: Date,
  }) {
    this.id = fields.id
    this.UserQuotaForObject_artifact_id = fields.UserQuotaForObject_artifact_id
    this.UserQuotaForObject_user_id = fields.UserQuotaForObject_user_id
    this.UserQuotaForObject_Name = fields.UserQuotaForObject_Name
    this.UserQuotaForObject_MinAmount = fields.UserQuotaForObject_MinAmount
    this.UserQuotaForObject_MinWarning = fields.UserQuotaForObject_MinWarning
    this.UserQuotaForObject_MaxAmount = fields.UserQuotaForObject_MaxAmount
    this.UserQuotaForObject_MaxWarning = fields.UserQuotaForObject_MaxWarning
    this.UserQuotaForObject_AllowMiscAsJSON = fields.UserQuotaForObject_AllowMiscAsJSON
    this.UserQuotaForObject_created_by = fields.UserQuotaForObject_created_by
    this.UserQuotaForObject_created_on = fields.UserQuotaForObject_created_on
    this.UserQuotaForObject_modified_on = fields.UserQuotaForObject_modified_on
    this.UserQuotaForObject_modified_by = fields.UserQuotaForObject_modified_by
  }
}

ObjectManager.registerEntity( 'UserQuotaForObject', UserQuotaForObject, {})
