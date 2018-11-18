"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _nestedErrorStacks = _interopRequireDefault(require("nested-error-stacks"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs.default.promises;

//
var
fsExists = async function fsExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;else
    {
      throw new _nestedErrorStacks.default('XXX', err);
    }
  }
};exports.default = fsExists;
//# sourceMappingURL=fsExists.js.map