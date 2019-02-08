"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _nestedErrorStacks = _interopRequireDefault(require("nested-error-stacks"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs.default.promises;

//
var
ensurePathExists = async function ensurePathExists(filePath) {
  try {
    await fs.mkdir(filePath);
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw new _nestedErrorStacks.default('rb-base-server ensurePathExists: Failed', err);
    }
  }
};exports.default = ensurePathExists;
//# sourceMappingURL=ensurePathExists.js.map