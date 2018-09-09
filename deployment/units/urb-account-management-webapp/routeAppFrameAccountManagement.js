"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactCodeSplitting = _interopRequireDefault(require("react-code-splitting"));
var _react = _interopRequireDefault(require("react"));
var _Route = _interopRequireDefault(require("found/lib/Route"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

const LogoutScreen = props =>
_react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/LogoutScreen'))), componentProps: props });

const NewUserScreen = props =>
_react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/NewUserScreen'))), componentProps: props });var _default =



_react.default.createElement(_Route.default, { key: "user", path: "user" },
_react.default.createElement(_Route.default, { path: "new", Component: NewUserScreen }),
_react.default.createElement(_Route.default, { path: "logout", Component: LogoutScreen }));exports.default = _default;
//# sourceMappingURL=routeAppFrameAccountManagement.js.map