"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/rb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class Inscriptio {







  constructor(fields)






  {
    this.id = fields.id;
    this.Inscriptio_artifact_id = fields.Inscriptio_artifact_id;
    this.Inscriptio_user_id = fields.Inscriptio_user_id;
    this.Inscriptio_LocationLat = fields.Inscriptio_LocationLat;
    this.Inscriptio_LocationLon = fields.Inscriptio_LocationLon;
    this.Inscriptio_Notes = fields.Inscriptio_Notes;
  }}exports.default = Inscriptio;


_ObjectManager.default.registerEntity('Inscriptio', Inscriptio, {});
//# sourceMappingURL=Inscriptio.js.map