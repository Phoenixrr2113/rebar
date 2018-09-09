"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/urb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class Translaticiarum {







  constructor(fields)






  {
    this.id = fields.id;
    this.Translaticiarum_artifact_id = fields.Translaticiarum_artifact_id;
    this.Translaticiarum_User_id = fields.Translaticiarum_User_id;
    this.Translaticiarum_Start = fields.Translaticiarum_Start;
    this.Translaticiarum_Stop = fields.Translaticiarum_Stop;
    this.Translaticiarum_Description = fields.Translaticiarum_Description;
  }}exports.default = Translaticiarum;


_ObjectManager.default.registerEntity('Translaticiarum', Translaticiarum);
//# sourceMappingURL=Translaticiarum.js.map