"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

// Class used by GraphQL Server
class User {













  constructor(fields)












  {
    this.id = fields.id;
    this.User_artifact_id = fields.User_artifact_id;
    this.UserToken2 = fields.UserToken2;
    this.User_DisplayName = fields.User_DisplayName;
    this.User_PrimaryEmail = fields.User_PrimaryEmail;
    this.User_PrimaryPhone = fields.User_PrimaryPhone;
    this.User_PrimaryLatitude = fields.User_PrimaryLatitude;
    this.User_PrimaryLongitude = fields.User_PrimaryLongitude;
    this.User_created_by = fields.User_created_by;
    this.User_created_on = fields.User_created_on;
    this.User_modified_on = fields.User_modified_on;
    this.User_modified_by = fields.User_modified_by;
  }}exports.default = User;
//# sourceMappingURL=User.js.map