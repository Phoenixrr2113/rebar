"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactRelay = require("react-relay"); //  weak

const mutation = function () {return require("./__generated__/EnsayoUpdateMutation.graphql");};












function commit(environment, aEnsayo, Ensayo_Title, Ensayo_Description, Ensayo_Content) {
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        id: aEnsayo.id,
        Ensayo_Title,
        Ensayo_Description,
        Ensayo_Content } },



    optimisticResponse() {
      return {
        EnsayoUpdate: {
          Ensayo: {
            id: aEnsayo.id,
            Ensayo_Title,
            Ensayo_Description,
            Ensayo_Content } } };



    } });

}var _default =

{ commit };exports.default = _default;
//# sourceMappingURL=EnsayoUpdateMutation.js.map