"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/rb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class UserQuotaForObject {














  constructor(fields)













  {
    this.id = fields.id;
    this.UserQuotaForObject_artifact_id = fields.UserQuotaForObject_artifact_id;
    this.UserQuotaForObject_user_id = fields.UserQuotaForObject_user_id;
    this.UserQuotaForObject_Name = fields.UserQuotaForObject_Name;
    this.UserQuotaForObject_MinAmount = fields.UserQuotaForObject_MinAmount;
    this.UserQuotaForObject_MinWarning = fields.UserQuotaForObject_MinWarning;
    this.UserQuotaForObject_MaxAmount = fields.UserQuotaForObject_MaxAmount;
    this.UserQuotaForObject_MaxWarning = fields.UserQuotaForObject_MaxWarning;
    this.UserQuotaForObject_AllowMiscAsJSON = fields.UserQuotaForObject_AllowMiscAsJSON;
    this.UserQuotaForObject_created_by = fields.UserQuotaForObject_created_by;
    this.UserQuotaForObject_created_on = fields.UserQuotaForObject_created_on;
    this.UserQuotaForObject_modified_on = fields.UserQuotaForObject_modified_on;
    this.UserQuotaForObject_modified_by = fields.UserQuotaForObject_modified_by;
  }}exports.default = UserQuotaForObject;


_ObjectManager.default.registerEntity('UserQuotaForObject', UserQuotaForObject, {});
//# sourceMappingURL=UserQuotaForObject.js.map