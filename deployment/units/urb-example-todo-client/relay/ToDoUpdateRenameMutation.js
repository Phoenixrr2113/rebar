"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactRelay = require("react-relay"); //  weak

const mutation = function () {return require("./__generated__/ToDoUpdateRenameMutation.graphql");};










function commit(environment, aToDo, ToDo_Text) {
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: { id: aToDo.id, ToDo_Text } },


    optimisticResponse() {
      return {
        ToDoUpdateRename: {
          ToDo: {
            id: aToDo.id,
            ToDo_Text } } };



    } });

}var _default =

{ commit };exports.default = _default;
//# sourceMappingURL=ToDoUpdateRenameMutation.js.map