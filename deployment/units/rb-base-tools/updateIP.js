"use strict";

var _fs = _interopRequireDefault(require("fs"));


var _getLocalIP = _interopRequireDefault(require("../rb-base-server/getLocalIP"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //import AppRegistryName from '../_configuration/rb-base-app/AppRegistryName'

// Read environment
require('dotenv').load();

const port = process.env.PORT;
if (port == null || typeof port !== 'string')
throw new Error('Error: update-ip requires the environment variable PORT to be set');

let IPAddress = process.argv[2];

if (IPAddress === undefined) IPAddress = (0, _getLocalIP.default)();

if (IPAddress !== undefined) {
  console.log('IP Address:' + IPAddress);
  updateIPInFile('./.env', 'PUBLIC_URL=', 'PUBLIC_URL=http://' + IPAddress + ':' + port, IPAddress);
  updateIPInFile('./.env', 'HOST=', 'HOST=' + IPAddress, IPAddress);
} else console.log('IP Address not specified and could not be found');

function updateIPInFile(fileName, searchString, newContentOfLine, IPAddress) {
  try {
    let fileLines = _fs.default.readFileSync(fileName, 'utf8').split('\n');
    let index = 0;

    while (index < fileLines.length) {
      if (fileLines[index].indexOf(searchString) > -1) {
        if (fileLines[index] === newContentOfLine)
        console.log('[' + fileName + '] is already up to date');else
        {
          fileLines[index] = newContentOfLine;
          _fs.default.writeFileSync(fileName, fileLines.join('\n'));

          console.log('[' + fileName + '] has been updated with local IP ' + IPAddress);
        }
        break;
      } else {
        index++;
      }
    }
  } catch (err) {
    console.log('[' + fileName + '] has not been been updated with local IP because ' + err);
  }
}
//# sourceMappingURL=updateIP.js.map