"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactRelay = require("react-relay"); //  weak

const mutation = function () {return require("./__generated__/InscriptioUpdateMutation.graphql");};












function commit(
environment,
aInscriptio,
Inscriptio_LocationLat,
Inscriptio_LocationLon,
Inscriptio_Notes)
{
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        id: aInscriptio.id,
        Inscriptio_LocationLat,
        Inscriptio_LocationLon,
        Inscriptio_Notes } },



    optimisticResponse() {
      return {
        InscriptioUpdate: {
          Inscriptio: {
            id: aInscriptio.id,
            Inscriptio_LocationLat,
            Inscriptio_LocationLon,
            Inscriptio_Notes } } };



    } });

}var _default =

{ commit };exports.default = _default;
//# sourceMappingURL=InscriptioUpdateMutation.js.map