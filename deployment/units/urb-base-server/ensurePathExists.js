"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs.default.promises;var

ensurePathExists = async function ensurePathExists(filePath) {
  try {
    await fs.mkdir(filePath);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
};exports.default = ensurePathExists;
//# sourceMappingURL=ensurePathExists.js.map