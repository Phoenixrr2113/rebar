"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactRelay = require("react-relay"); //  weak

const mutation = function () {return require("./__generated__/TranslaticiarumUpdateMutation.graphql");};












function commit(
environment,
aTranslaticiarum,
Translaticiarum_Start,
Translaticiarum_Stop,
Translaticiarum_Description)
{
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        id: aTranslaticiarum.id,
        Translaticiarum_Start,
        Translaticiarum_Stop,
        Translaticiarum_Description } },



    optimisticResponse() {
      return {
        TranslaticiarumUpdate: {
          Translaticiarum: {
            id: aTranslaticiarum.id,
            Translaticiarum_Start,
            Translaticiarum_Stop,
            Translaticiarum_Description } } };



    } });

}var _default =

{ commit };exports.default = _default;
//# sourceMappingURL=TranslaticiarumUpdateMutation.js.map