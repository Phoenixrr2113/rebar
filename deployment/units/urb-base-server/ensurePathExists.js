'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs2.default.promises;exports.default =

async function ensurePathExists(filePath) {
  try {
    await fs.mkdir(filePath);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
};
//# sourceMappingURL=ensurePathExists.js.map