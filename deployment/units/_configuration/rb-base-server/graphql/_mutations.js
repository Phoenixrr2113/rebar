"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _UserUpdate = _interopRequireDefault(require("../../../rb-account-management-server/graphql/mutation/UserUpdate"));
var _EnsayoAdd = _interopRequireDefault(require("../../../rb-example-ensayo-server/graphql/mutation/EnsayoAdd"));
var _EnsayoDelete = _interopRequireDefault(require("../../../rb-example-ensayo-server/graphql/mutation/EnsayoDelete"));
var _EnsayoUpdate = _interopRequireDefault(require("../../../rb-example-ensayo-server/graphql/mutation/EnsayoUpdate"));
var _ToDoAdd = _interopRequireDefault(require("../../../rb-example-todo-server/graphql/mutation/ToDoAdd"));
var _ToDoDelete = _interopRequireDefault(require("../../../rb-example-todo-server/graphql/mutation/ToDoDelete"));
var _ToDoListUpdateMarkAll = _interopRequireDefault(require("../../../rb-example-todo-server/graphql/mutation/ToDoListUpdateMarkAll"));
var _ToDoUpdateRename = _interopRequireDefault(require("../../../rb-example-todo-server/graphql/mutation/ToDoUpdateRename"));
var _ToDoUpdateStatus = _interopRequireDefault(require("../../../rb-example-todo-server/graphql/mutation/ToDoUpdateStatus"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  UserUpdate: _UserUpdate.default,
  EnsayoAdd: _EnsayoAdd.default,
  EnsayoDelete: _EnsayoDelete.default,
  EnsayoUpdate: _EnsayoUpdate.default,
  ToDoAdd: _ToDoAdd.default,
  ToDoDelete: _ToDoDelete.default,
  ToDoListUpdateMarkAll: _ToDoListUpdateMarkAll.default,
  ToDoUpdateRename: _ToDoUpdateRename.default,
  ToDoUpdateStatus: _ToDoUpdateStatus.default };exports.default = _default;
//# sourceMappingURL=_mutations.js.map