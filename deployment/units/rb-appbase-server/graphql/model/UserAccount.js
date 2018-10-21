"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/rb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class UserAccount {




  // UserName, Social account

  constructor(fields)





  {
    this.id = fields.id;
    this.UserAccount_artifact_id = fields.UserAccount_artifact_id;
    this.UserAccount_User_id = fields.UserAccount_User_id;
    this.UserAccount_Identifier = fields.UserAccount_Identifier;
    this.UserAccount_Type = fields.UserAccount_Type;
  }}exports.default = UserAccount;


_ObjectManager.default.registerEntity('UserAccount', UserAccount, {});
//# sourceMappingURL=UserAccount.js.map