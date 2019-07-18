"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _util = _interopRequireDefault(require("util"));

var _chalk = _interopRequireDefault(require("chalk"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const debugLogColors = [
//chalk.bgRed.redBright,
_chalk.default.bgRed.greenBright,
_chalk.default.bgRed.yellowBright,
//chalk.bgRed.blueBright,
_chalk.default.bgRed.magentaBright,
_chalk.default.bgRed.cyanBright,
_chalk.default.bgRed.whiteBright,
//
//chalk.bgGreen.redBright,
//chalk.bgGreen.greenBright,
_chalk.default.bgGreen.yellowBright,
_chalk.default.bgGreen.blueBright,
//chalk.bgGreen.magentaBright,
//chalk.bgGreen.cyanBright,
_chalk.default.bgGreen.whiteBright,
//
//chalk.bgYellow.redBright,
//chalk.bgYellow.greenBright,
//chalk.bgYellow.yellowBright,
_chalk.default.bgYellow.blueBright,
//chalk.bgYellow.magentaBright,
//chalk.bgYellow.cyanBright,
//chalk.bgYellow.whiteBright,
//
//chalk.bgBlue.redBright,
_chalk.default.bgBlue.greenBright,
_chalk.default.bgBlue.yellowBright,
//chalk.bgBlue.blueBright,
_chalk.default.bgBlue.magentaBright,
_chalk.default.bgBlue.cyanBright,
_chalk.default.bgBlue.whiteBright,
//
//chalk.bgMagenta.redBright,
_chalk.default.bgMagenta.greenBright,
_chalk.default.bgMagenta.yellowBright,
//chalk.bgMagenta.blueBright,
//chalk.bgMagenta.magentaBright,
//chalk.bgMagenta.cyanBright,
_chalk.default.bgMagenta.whiteBright,
//
_chalk.default.bgCyan.redBright,
//chalk.bgCyan.greenBright,
_chalk.default.bgCyan.yellowBright,
//chalk.bgCyan.blueBright,
//chalk.bgCyan.magentaBright,
//chalk.bgCyan.cyanBright,
_chalk.default.bgCyan.whiteBright];


const debugLogColorsLength = debugLogColors.length;

const applyDebugColorCache = {};
function applyDebugColor(str) {
  // Cached?
  const cachedColor = applyDebugColorCache[str];
  if (cachedColor) {
    return cachedColor(str);
  }

  let hash = 0;
  if (str.length === 0) throw new Error('assert');
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  const debugColor = debugLogColors[Math.abs(hash) % debugLogColorsLength];
  applyDebugColorCache[str] = debugColor;

  return debugColor(str);
}

class Trace {


  constructor() {
    this.level = 0;
  }

  next(extraLevels) {
    const next = new Trace();
    next.level = this.level + 1;

    if (extraLevels) {
      next.level += extraLevels;
    }

    return next;
  }

  add(description, object, extraLevels) {
    const currentLevel = this.level + (extraLevels ? extraLevels : 0);

    let preamble = '';

    for (let level = currentLevel; level > 0; level--) {
      preamble += _chalk.default.gray('╎') + '   ';
    }

    const strContent =
    applyDebugColor(description) +
    ' ' +
    _util.default.inspect(object, { depth: 1000, breakLength: 150, colors: true });
    const arrContent = strContent.replace('\r', '').split('\n');

    for (let content of arrContent) {
      console.log(preamble + content);
    }
  }}exports.default = Trace;
//# sourceMappingURL=Trace.js.map