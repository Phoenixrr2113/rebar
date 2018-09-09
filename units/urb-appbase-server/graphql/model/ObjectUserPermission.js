// @flow

import ObjectManager from '../../../../units/urb-base-server/ObjectManager'

// Class used by GraphQL Server
export default class ObjectUserPermission {
  id: string
  ObjectUserPermission_artifact_id: string
  ObjectUserPermission_user_id: string
  ObjectUserPermission_Name: string
  ObjectUserPermission_PermitCreate: boolean
  ObjectUserPermission_PermitRead: boolean
  ObjectUserPermission_PermitUpdate: boolean
  ObjectUserPermission_PermitDelete: boolean
  ObjectUserPermission_PermitMiscAsJSON: string
  ObjectUserPermission_created_by: string
  ObjectUserPermission_created_on: Date
  ObjectUserPermission_modified_by: string
  ObjectUserPermission_modified_on: Date

  constructor( fields: {
    id: string,
    ObjectUserPermission_artifact_id: string,
    ObjectUserPermission_user_id: string,
    ObjectUserPermission_Name: string,
    ObjectUserPermission_PermitCreate: boolean,
    ObjectUserPermission_PermitRead: boolean,
    ObjectUserPermission_PermitUpdate: boolean,
    ObjectUserPermission_PermitDelete: boolean,
    ObjectUserPermission_PermitMiscAsJSON: string,
    ObjectUserPermission_created_by: string,
    ObjectUserPermission_created_on: Date,
    ObjectUserPermission_modified_by: string,
    ObjectUserPermission_modified_on: Date,
  }) {
    this.id = fields.id
    this.ObjectUserPermission_artifact_id = fields.ObjectUserPermission_artifact_id
    this.ObjectUserPermission_user_id = fields.ObjectUserPermission_user_id
    this.ObjectUserPermission_Name = fields.ObjectUserPermission_Name
    this.ObjectUserPermission_PermitCreate = fields.ObjectUserPermission_PermitCreate
    this.ObjectUserPermission_PermitRead = fields.ObjectUserPermission_PermitRead
    this.ObjectUserPermission_PermitUpdate = fields.ObjectUserPermission_PermitUpdate
    this.ObjectUserPermission_PermitDelete = fields.ObjectUserPermission_PermitDelete
    this.ObjectUserPermission_PermitMiscAsJSON = fields.ObjectUserPermission_PermitMiscAsJSON
    this.ObjectUserPermission_created_by = fields.ObjectUserPermission_created_by
    this.ObjectUserPermission_created_on = fields.ObjectUserPermission_created_on
    this.ObjectUserPermission_modified_on = fields.ObjectUserPermission_modified_on
    this.ObjectUserPermission_modified_by = fields.ObjectUserPermission_modified_by
  }
}

ObjectManager.registerEntity( 'ObjectUserPermission', ObjectUserPermission )
