'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');var _path2 = _interopRequireDefault(_path);

var _ensureFileContent = require('./ensureFileContent');var _ensureFileContent2 = _interopRequireDefault(_ensureFileContent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs2.default.promises;

class MasterWriter {






  constructor(basePath, logToConsole) {
    this.basePath = basePath;
    this.logToConsole = logToConsole;

    this.directories = new Map();
    this.arrPromises = [];
  } // $AssureFlow

  async ensureRelativePathExistsHelper(filePath) {
    if (!this.directories.has(filePath)) {
      try {
        await fs.mkdir(_path2.default.resolve(this.basePath, filePath));
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
    (0, _ensureFileContent2.default)(
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