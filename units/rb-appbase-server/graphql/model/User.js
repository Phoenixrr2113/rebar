// @flow

// Class used by GraphQL Server
export default class User {
  id: string
  User_artifact_id: string
  UserToken2: string
  User_DisplayName: string
  User_PrimaryEmail: string
  User_PrimaryPhone: string
  User_PrimaryLatitude: number
  User_PrimaryLongitude: number
  User_created_by: string
  User_created_on: Date
  User_modified_by: string
  User_modified_on: Date

  constructor( fields: {
    id: string,
    User_artifact_id: string,
    UserToken2: string,
    User_DisplayName: string,
    User_PrimaryEmail: string,
    User_PrimaryPhone: string,
    User_PrimaryLatitude: number,
    User_PrimaryLongitude: number,
    User_created_by: string,
    User_created_on: Date,
    User_modified_by: string,
    User_modified_on: Date,
  }) {
    this.id = fields.id
    this.User_artifact_id = fields.User_artifact_id
    this.UserToken2 = fields.UserToken2
    this.User_DisplayName = fields.User_DisplayName
    this.User_PrimaryEmail = fields.User_PrimaryEmail
    this.User_PrimaryPhone = fields.User_PrimaryPhone
    this.User_PrimaryLatitude = fields.User_PrimaryLatitude
    this.User_PrimaryLongitude = fields.User_PrimaryLongitude
    this.User_created_by = fields.User_created_by
    this.User_created_on = fields.User_created_on
    this.User_modified_on = fields.User_modified_on
    this.User_modified_by = fields.User_modified_by
  }
}
