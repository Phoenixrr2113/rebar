// @flow

import ObjectManager from '../../../../units/urb-base-server/ObjectManager'

// Class used by GraphQL Server
export default class ResourceUserAllowance {
  id: string
  ResourceUserAllowance_artifact_id: string
  ResourceUserAllowance_user_id: string
  ResourceUserAllowance_Name: string
  ResourceUserAllowance_MinAmount: number
  ResourceUserAllowance_MinWarning: number
  ResourceUserAllowance_MaxAmount: number
  ResourceUserAllowance_MaxWarning: number
  ResourceUserAllowance_AllowMiscAsJSON: string
  ResourceUserAllowance_created_by: string
  ResourceUserAllowance_created_on: Date
  ResourceUserAllowance_modified_by: string
  ResourceUserAllowance_modified_on: Date

  constructor( fields: {
    id: string,
    ResourceUserAllowance_artifact_id: string,
    ResourceUserAllowance_user_id: string,
    ResourceUserAllowance_Name: string,
    ResourceUserAllowance_MinAmount: number,
    ResourceUserAllowance_MinWarning: number,
    ResourceUserAllowance_MaxAmount: number,
    ResourceUserAllowance_MaxWarning: number,
    ResourceUserAllowance_AllowMiscAsJSON: string,
    ResourceUserAllowance_created_by: string,
    ResourceUserAllowance_created_on: Date,
    ResourceUserAllowance_modified_by: string,
    ResourceUserAllowance_modified_on: Date,
  }) {
    this.id = fields.id
    this.ResourceUserAllowance_artifact_id = fields.ResourceUserAllowance_artifact_id
    this.ResourceUserAllowance_user_id = fields.ResourceUserAllowance_user_id
    this.ResourceUserAllowance_Name = fields.ResourceUserAllowance_Name
    this.ResourceUserAllowance_MinAmount = fields.ResourceUserAllowance_MinAmount
    this.ResourceUserAllowance_MinWarning = fields.ResourceUserAllowance_MinWarning
    this.ResourceUserAllowance_MaxAmount = fields.ResourceUserAllowance_MaxAmount
    this.ResourceUserAllowance_MaxWarning = fields.ResourceUserAllowance_MaxWarning
    this.ResourceUserAllowance_AllowMiscAsJSON = fields.ResourceUserAllowance_AllowMiscAsJSON
    this.ResourceUserAllowance_created_by = fields.ResourceUserAllowance_created_by
    this.ResourceUserAllowance_created_on = fields.ResourceUserAllowance_created_on
    this.ResourceUserAllowance_modified_on = fields.ResourceUserAllowance_modified_on
    this.ResourceUserAllowance_modified_by = fields.ResourceUserAllowance_modified_by
  }
}

ObjectManager.registerEntity( 'ResourceUserAllowance', ResourceUserAllowance )
