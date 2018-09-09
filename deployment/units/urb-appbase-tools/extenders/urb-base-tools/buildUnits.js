'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');var _path2 = _interopRequireDefault(_path);

var _graphql = require('graphql');
var _utilities = require('graphql/utilities');
var _prettierEslint = require('prettier-eslint');var _prettierEslint2 = _interopRequireDefault(_prettierEslint);

var _ensureFileContent = require('../../../urb-base-server/ensureFileContent');var _ensureFileContent2 = _interopRequireDefault(_ensureFileContent);

var _eslintrc = require('../../../../.eslintrc.json');var _eslintrc2 = _interopRequireDefault(_eslintrc);
var _fsExists = require('../../../urb-base-server/fsExists');var _fsExists2 = _interopRequireDefault(_fsExists);
var _package = require('../../../../package.json');var _package2 = _interopRequireDefault(_package);
var _schema = require('../../../urb-appbase-server/graphql/schema');var _schema2 = _interopRequireDefault(_schema);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // $AssureFlow Not sure why it gives an error. The file does exist

const fs = _fs2.default.promises;

const prettierESLintOptions = { eslintConfig: _eslintrc2.default, prettierOptions: _package2.default.prettier

  // TODO x0500 It is a complete mystery to me why the comments are encased in """ but the relay
  // compiler does not like them. Either way, this sanitizes the schema and removes the comment.
};const reRemoveComments = new RegExp('"""[^"]*"""', 'g');

async function createGraphQLSchema(units) {
  const result = await (0, _graphql.graphql)(_schema2.default, _utilities.introspectionQuery);
  if (result.errors)
  throw new Error('Failed introspecting schema: ' + JSON.stringify(result.errors, null, 2));

  const printedSchema = (0, _utilities.printSchema)(_schema2.default).replace(reRemoveComments, '#');

  const taskPromises = [
  (0, _ensureFileContent2.default)(
  _path2.default.resolve('./units/_configuration/urb-base-server/graphql/schema.json'),
  null,
  JSON.stringify(result, null, 2),
  true),

  (0, _ensureFileContent2.default)(_path2.default.resolve('schema.graphql'), null, printedSchema, true)];


  await Promise.all(taskPromises);
}

async function createRouteFile(fileName, imports, exports) {
  let routesAppFrame = ['// @flow', ''];
  routesAppFrame = routesAppFrame.concat(imports);
  routesAppFrame = routesAppFrame.concat(['', 'export default [']);
  routesAppFrame = routesAppFrame.concat(exports);
  routesAppFrame = routesAppFrame.concat([']']);

  await (0, _ensureFileContent2.default)(
  fileName,
  null,
  (0, _prettierEslint2.default)(Object.assign({ text: routesAppFrame.join('\r\n') }, prettierESLintOptions)),
  true);

}

async function createRoutes(units) {
  const routesAppFrameImports = [];
  const routesRootImports = [];
  const routesAppFrameExports = [];
  const routesRootExports = [];

  for (let unitName of units)
  if (unitName.endsWith('-webapp')) {
    const routesDir = _path2.default.resolve('./units', unitName);
    if (await (0, _fsExists2.default)(routesDir)) {
      const routeFileNames = await fs.readdir(routesDir);

      for (let routeFileName of routeFileNames) {
        if (routeFileName.endsWith('.jsx'))
        if (routeFileName.startsWith('routeAppFrame')) {
          const route = routeFileName.substring(0, routeFileName.length - 4);
          routesAppFrameImports.push(
          'import ' + route + ' from \'../../' + unitName + '/' + route + '\'');

          routesAppFrameExports.push('  ' + route + ',');
        } else if (routeFileName.startsWith('routeRoot')) {
          const route = routeFileName.substring(0, routeFileName.length - 4);
          routesRootImports.push(
          'import ' + route + ' from \'../../' + unitName + '/' + route + '\'');

          routesRootExports.push('  ' + route + ',');
        }
      }
    }
  }

  await Promise.all([
  createRouteFile(
  _path2.default.resolve('./units/_configuration/urb-appbase-webapp/routesAppFrame.js'),
  routesAppFrameImports,
  routesAppFrameExports),

  createRouteFile(
  _path2.default.resolve('./units/_configuration/urb-appbase-webapp/routesRoot.js'),
  routesRootImports,
  routesRootExports)]);


}exports.default =

async function buildUnits(units) {
  const taskPromises = [createGraphQLSchema(units), createRoutes(units)];

  await Promise.all(taskPromises);
};
//# sourceMappingURL=buildUnits.js.map