'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs2.default.promises;exports.default =

async function fsExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;else
    throw err;
  }
};
//# sourceMappingURL=fsExists.js.map