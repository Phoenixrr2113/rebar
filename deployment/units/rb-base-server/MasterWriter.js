"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));

var _ensureFileContent = _interopRequireDefault(require("./ensureFileContent"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs.default.promises;

class MasterWriter {



  // $AssureFlow


  constructor(basePath, logToConsole) {
    this.basePath = basePath;
    this.logToConsole = logToConsole;

    this.directories = new Map();
    this.arrPromises = [];
  }

  async ensureRelativePathExistsHelper(filePath) {
    if (!this.directories.has(filePath)) {
      try {
        await fs.mkdir(_path.default.resolve(this.basePath, filePath));
      } catch (err) {
        if (err.code !== 'EEXIST') throw err;
      }

      this.directories.set(filePath, true);
    }
  }

  async ensureRelativePathExists(destinationRelative) {
    const arrPath = destinationRelative.split('/');

    for (let pathAccumulated = '', ix = 0; ix < arrPath.length; ix++) {
      await this.ensureRelativePathExistsHelper(pathAccumulated);
      pathAccumulated += arrPath[ix] + '/';
    }
  }

  async copyFile(sourceAbsolute, destinationRelative) {
    await this.ensureRelativePathExists(destinationRelative);

    this.arrPromises.push(fs.copyFile(sourceAbsolute, this.basePath + '/' + destinationRelative));
  }

  async writeFile(destinationRelative, fileContent) {
    await this.ensureRelativePathExists(destinationRelative);

    this.arrPromises.push(
    (0, _ensureFileContent.default)(
    this.basePath + '/' + destinationRelative,
    null,
    fileContent,
    this.logToConsole));


  }

  async executeQueue() {
    await Promise.all(this.arrPromises);
    this.arrPromises = [];
  }}exports.default = MasterWriter;
//# sourceMappingURL=MasterWriter.js.map