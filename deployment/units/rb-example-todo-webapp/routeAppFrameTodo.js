"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactCodeSplitting = _interopRequireDefault(require("react-code-splitting"));
var _reactRelay = require("react-relay");
var _react = _interopRequireDefault(require("react"));
var _Route = _interopRequireDefault(require("found/lib/Route"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

const ToDoList = props => _react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/ToDoList'))), componentProps: props });

const ToDoScreen = props =>
_react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/ToDoScreen'))), componentProps: props });


const ToDoListQuery = function () {return require("./__generated__/routeAppFrameTodo_ToDoList_Query.graphql");};var _default =








_react.default.createElement(_Route.default, {
  key: "todo",
  path: "todo",
  Component: ToDoScreen,
  query: function () {return require("./__generated__/routeAppFrameTodo_ToDoScreen_Query.graphql");} },







_react.default.createElement(_Route.default, {
  Component: ToDoList,
  query: ToDoListQuery,
  prepareVariables: params => ({ ...params, status: 'any' }) }),

_react.default.createElement(_Route.default, { path: ":status", Component: ToDoList, query: ToDoListQuery }));exports.default = _default;
//# sourceMappingURL=routeAppFrameTodo.js.map