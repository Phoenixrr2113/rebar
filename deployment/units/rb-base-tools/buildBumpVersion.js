"use strict";

var _fs = _interopRequireDefault(require("fs"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

const packageJSON = require('../../package.json');

console.log('Current version in package.json: ' + packageJSON.version);

const arrVersion = packageJSON.version.split('.');
arrVersion[2]++;
packageJSON.version = arrVersion.join('.');

console.log('New version in package.json: ' + packageJSON.version);

_fs.default.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2));
//# sourceMappingURL=buildBumpVersion.js.map