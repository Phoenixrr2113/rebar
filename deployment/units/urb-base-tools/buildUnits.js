'use strict';

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');var _path2 = _interopRequireDefault(_path);

var _prettierEslint = require('prettier-eslint');var _prettierEslint2 = _interopRequireDefault(_prettierEslint);
var _sortedJsonStringify = require('sorted-json-stringify');var _sortedJsonStringify2 = _interopRequireDefault(_sortedJsonStringify);


var _eslintrc = require('../../.eslintrc.json');var _eslintrc2 = _interopRequireDefault(_eslintrc);
var _fsExists = require('../urb-base-server/fsExists');var _fsExists2 = _interopRequireDefault(_fsExists);
var _package = require('../../package.json');var _package2 = _interopRequireDefault(_package);
var _buildUnits = require('../_configuration/urb-base-tools/buildUnits');var _buildUnits2 = _interopRequireDefault(_buildUnits);
var _ensureFileContent = require('../urb-base-server/ensureFileContent');var _ensureFileContent2 = _interopRequireDefault(_ensureFileContent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const fs = _fs2.default.promises; // $AssureFlow Not sure why it gives an error. The file does exist

const prettierESLintOptions = { eslintConfig: _eslintrc2.default, prettierOptions: _package2.default.prettier };

function mergeScripts(scripts1, scripts2) {
  const scripts = Object.assign({}, scripts1);

  for (let scriptName in scripts2) {
    const script = scripts[scriptName];
    const script2 = scripts2[scriptName];

    if (script && script2) {
      scripts[scriptName] = script + ' && ' + script2;
    } else if (script2) {
      scripts[scriptName] = script2;
    }
  }

  return scripts;
}

async function createPackageJson(units) {
  const packageJsonFileName = _path2.default.resolve('./package.json');
  const currentPackageAsJSONString = (await fs.readFile(packageJsonFileName)).toString();
  const currentPackageAsObject = JSON.parse(currentPackageAsJSONString);
  const packageAsObject = {
    dependencies: {},
    devDependencies: {},
    engines: {},
    'lint-staged': {},
    name: null,
    prettier: {},
    scripts: {},
    version: null


    // Make sure not to overwrite version information
  };packageAsObject.version = currentPackageAsObject.version;
  packageAsObject.name = currentPackageAsObject.name;

  // Add packages to object
  for (let unitName of units) {
    const packageAsObjectName = _path2.default.resolve('./units', unitName, 'package.part.json');
    if (await (0, _fsExists2.default)(packageAsObjectName)) {
      const packageToAddAsObject = JSON.parse((await fs.readFile(packageAsObjectName)).toString());

      if (packageToAddAsObject.dependencies)
      Object.assign(packageAsObject.dependencies, packageToAddAsObject.dependencies);
      if (packageToAddAsObject.devDependencies)
      Object.assign(packageAsObject.devDependencies, packageToAddAsObject.devDependencies);
      if (packageToAddAsObject.engines)
      Object.assign(packageAsObject.engines, packageToAddAsObject.engines);
      if (packageToAddAsObject['lint-staged'])
      Object.assign(packageAsObject['lint-staged'], packageToAddAsObject['lint-staged']);
      if (packageToAddAsObject.prettier)
      Object.assign(packageAsObject.prettier, packageToAddAsObject.prettier);
      if (packageToAddAsObject.scripts)
      packageAsObject.scripts = mergeScripts(
      packageAsObject.scripts,
      packageToAddAsObject.scripts);

    }
  }

  await (0, _ensureFileContent2.default)(
  packageJsonFileName,
  currentPackageAsJSONString,
  (0, _sortedJsonStringify2.default)(packageAsObject, null, 2),
  true);

}

async function createMutations(units) {
  const mutationsImports = [];
  const mutationsExports = [];

  for (let unitName of units)
  if (unitName.endsWith('-server')) {
    const mutationsDir = _path2.default.resolve('./units', unitName, 'graphql/mutation');
    if (await (0, _fsExists2.default)(mutationsDir)) {
      const mutationFileNames = await fs.readdir(mutationsDir);

      for (let mutationFileName of mutationFileNames) {
        if (mutationFileName.endsWith('.js')) {
          const mutation = mutationFileName.substring(0, mutationFileName.length - 3);
          mutationsImports.push(
          'import ' +
          mutation.replace('.', '_') +
          ' from \'../../../' +
          unitName +
          '/graphql/mutation/' +
          mutation +
          '\'');

          mutationsExports.push('  ' + mutation + ',');
        }
      }
    }
  }

  let mutations = ['// @flow', ''];
  mutations = mutations.concat(mutationsImports);
  mutations = mutations.concat(['', 'export default {']);
  mutations = mutations.concat(mutationsExports);
  mutations = mutations.concat(['}']);

  await (0, _ensureFileContent2.default)(
  _path2.default.resolve('./units/_configuration/urb-base-server/graphql/_mutations.js'),
  null,
  (0, _prettierEslint2.default)(Object.assign({ text: mutations.join('\r\n') }, prettierESLintOptions)),
  true);

}

async function createSchemas(units) {
  const schemasImports = [];

  for (let unitName of units)
  if (unitName.endsWith('-server')) {
    const schemasDir = _path2.default.resolve('./units', unitName, 'graphql/model');
    if (await (0, _fsExists2.default)(schemasDir)) {
      const objectTypeFileNames = await fs.readdir(schemasDir);

      for (let objectTypeFileName of objectTypeFileNames) {
        if (objectTypeFileName.endsWith('.js')) {
          const objectType = objectTypeFileName.substring(0, objectTypeFileName.length - 3);
          schemasImports.push(
          'import \'../../../' + unitName + '/graphql/model/' + objectType + '\'');

        }
      }
    }
  }

  let schemas = ['// @flow', ''];
  schemas = schemas.concat(schemasImports);
  schemas = schemas.concat(['', 'export default true']);

  await (0, _ensureFileContent2.default)(
  _path2.default.resolve('./units/_configuration/urb-base-server/graphql/_schemas.js'),
  null,
  (0, _prettierEslint2.default)(Object.assign({ text: schemas.join('\r\n') }, prettierESLintOptions)),
  true);

}

async function createViewerFields(units) {
  const viewerFieldsImports = [];
  const viewerFieldsExports = [];

  for (let unitName of units)
  if (unitName.endsWith('-server')) {
    const viewerFieldsFileName = _path2.default.resolve(
    './units',
    unitName,
    'graphql/type/_ViewerFields.js');

    if (await (0, _fsExists2.default)(viewerFieldsFileName)) {
      const viewerFieldsImportName = unitName.replace(/-/g, '_');
      viewerFieldsImports.push(
      'import ' +
      viewerFieldsImportName +
      ' from \'../../../' +
      unitName +
      '/graphql/type/_ViewerFields\'');

      viewerFieldsExports.push('  ...' + viewerFieldsImportName + ',');
    }
  }

  let viewerFields = ['// @flow', ''];
  viewerFields = viewerFields.concat(viewerFieldsImports);
  viewerFields = viewerFields.concat(['', 'export default {']);
  viewerFields = viewerFields.concat(viewerFieldsExports);
  viewerFields = viewerFields.concat(['}']);

  await (0, _ensureFileContent2.default)(
  _path2.default.resolve('./units/_configuration/urb-base-server/graphql/_ViewerFields.js'),
  null,
  (0, _prettierEslint2.default)(Object.assign({ text: viewerFields.join('\r\n') }, prettierESLintOptions)),
  true);

}

async function getUnits() {
  const units = (await fs.readdir('./units/')).filter(
  fileName => fileName !== '.DS_Store' && fileName !== '_configuration');

  return units;
}

async function main() {
  const units = await getUnits();

  const taskPromises = [
  createPackageJson(units),
  createViewerFields(units),
  createSchemas(units),
  createMutations(units),
  (0, _buildUnits2.default)(units)];


  await Promise.all(taskPromises);
}

main().then(() => console.log('Fin.'));
//# sourceMappingURL=buildUnits.js.map