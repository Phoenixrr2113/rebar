"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/rb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class UserSession {











  constructor(fields)










  {
    this.id = fields.id;
    this.UserSession_artifact_id = fields.UserSession_artifact_id;
    this.UserSession_User_id = fields.UserSession_User_id;
    this.UserSession_Start = fields.UserSession_Start;
    this.UserSession_Expired = fields.UserSession_Expired;
    this.UserSession_IsAnonymous = fields.UserSession_IsAnonymous;
    this.UserSession_created_by = fields.UserSession_created_by;
    this.UserSession_created_on = fields.UserSession_created_on;
    this.UserSession_modified_on = fields.UserSession_modified_on;
    this.UserSession_modified_by = fields.UserSession_modified_by;
  }}exports.default = UserSession;


_ObjectManager.default.registerEntity('UserSession', UserSession, {});
//# sourceMappingURL=UserSession.js.map