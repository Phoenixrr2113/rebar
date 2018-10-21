"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs.default.promises;var

ensureFileContent = async function ensureFileContent(
fileName,
currentFileContent,
newFileContent,
logToConsole)
{
  // If the current file content is not provided, get it
  if (currentFileContent == null) {
    try {
      currentFileContent = (await fs.readFile(fileName)).toString();
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
  }

  if (currentFileContent !== newFileContent) {
    if (logToConsole) console.log(_chalk.default.white.bgGreen('[written]') + ' ' + fileName);
    await fs.writeFile(fileName, newFileContent, 'utf8');
  } else {
    if (logToConsole) console.log(_chalk.default.white.bgBlackBright('[skipped]') + ' ' + fileName);
  }
};exports.default = ensureFileContent;
//# sourceMappingURL=ensureFileContent.js.map