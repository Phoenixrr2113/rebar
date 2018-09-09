'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _ObjectManager = require('../../../../units/urb-base-server/ObjectManager');var _ObjectManager2 = _interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class ResourceUserAllowance {














  constructor(fields)













  {
    this.id = fields.id;
    this.ResourceUserAllowance_artifact_id = fields.ResourceUserAllowance_artifact_id;
    this.ResourceUserAllowance_user_id = fields.ResourceUserAllowance_user_id;
    this.ResourceUserAllowance_Name = fields.ResourceUserAllowance_Name;
    this.ResourceUserAllowance_MinAmount = fields.ResourceUserAllowance_MinAmount;
    this.ResourceUserAllowance_MinWarning = fields.ResourceUserAllowance_MinWarning;
    this.ResourceUserAllowance_MaxAmount = fields.ResourceUserAllowance_MaxAmount;
    this.ResourceUserAllowance_MaxWarning = fields.ResourceUserAllowance_MaxWarning;
    this.ResourceUserAllowance_AllowMiscAsJSON = fields.ResourceUserAllowance_AllowMiscAsJSON;
    this.ResourceUserAllowance_created_by = fields.ResourceUserAllowance_created_by;
    this.ResourceUserAllowance_created_on = fields.ResourceUserAllowance_created_on;
    this.ResourceUserAllowance_modified_on = fields.ResourceUserAllowance_modified_on;
    this.ResourceUserAllowance_modified_by = fields.ResourceUserAllowance_modified_by;
  }}exports.default = ResourceUserAllowance;


_ObjectManager2.default.registerEntity('ResourceUserAllowance', ResourceUserAllowance);
//# sourceMappingURL=ResourceUserAllowance.js.map