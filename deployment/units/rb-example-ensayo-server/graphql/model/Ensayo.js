"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/rb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class Ensayo {







  constructor(fields)






  {
    this.id = fields.id;
    this.Ensayo_artifact_id = fields.Ensayo_artifact_id;
    this.Ensayo_user_id = fields.Ensayo_user_id;
    this.Ensayo_Title = fields.Ensayo_Title;
    this.Ensayo_Description = fields.Ensayo_Description;
    this.Ensayo_Content = fields.Ensayo_Content;
  }}exports.default = Ensayo;


_ObjectManager.default.registerEntity('Ensayo', Ensayo, {});
//# sourceMappingURL=Ensayo.js.map