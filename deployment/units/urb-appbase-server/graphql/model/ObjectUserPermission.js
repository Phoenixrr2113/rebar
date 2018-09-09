"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/urb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class ObjectUserPermission {














  constructor(fields)













  {
    this.id = fields.id;
    this.ObjectUserPermission_artifact_id = fields.ObjectUserPermission_artifact_id;
    this.ObjectUserPermission_user_id = fields.ObjectUserPermission_user_id;
    this.ObjectUserPermission_Name = fields.ObjectUserPermission_Name;
    this.ObjectUserPermission_PermitCreate = fields.ObjectUserPermission_PermitCreate;
    this.ObjectUserPermission_PermitRead = fields.ObjectUserPermission_PermitRead;
    this.ObjectUserPermission_PermitUpdate = fields.ObjectUserPermission_PermitUpdate;
    this.ObjectUserPermission_PermitDelete = fields.ObjectUserPermission_PermitDelete;
    this.ObjectUserPermission_PermitMiscAsJSON = fields.ObjectUserPermission_PermitMiscAsJSON;
    this.ObjectUserPermission_created_by = fields.ObjectUserPermission_created_by;
    this.ObjectUserPermission_created_on = fields.ObjectUserPermission_created_on;
    this.ObjectUserPermission_modified_on = fields.ObjectUserPermission_modified_on;
    this.ObjectUserPermission_modified_by = fields.ObjectUserPermission_modified_by;
  }}exports.default = ObjectUserPermission;


_ObjectManager.default.registerEntity('ObjectUserPermission', ObjectUserPermission);
//# sourceMappingURL=ObjectUserPermission.js.map