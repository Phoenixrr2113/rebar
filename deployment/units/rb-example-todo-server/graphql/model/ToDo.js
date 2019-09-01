"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ObjectManager = _interopRequireDefault(require("../../../../units/rb-base-server/ObjectManager"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class ToDo {






  constructor(fields)





  {
    this.id = fields.id;
    this.ToDo_artifact_id = fields.ToDo_artifact_id;
    this.ToDo_user_id = fields.ToDo_user_id;
    this.ToDo_Text = fields.ToDo_Text;
    this.ToDo_Complete = fields.ToDo_Complete;
  }}exports.default = ToDo;


_ObjectManager.default.registerEntity('ToDo', ToDo, {});
//# sourceMappingURL=ToDo.js.map