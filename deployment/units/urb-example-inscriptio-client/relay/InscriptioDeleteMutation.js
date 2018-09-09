"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactRelay = require("react-relay");
var _relayRuntime = require("relay-runtime"); //  weak

const mutation = function () {return require("./__generated__/InscriptioDeleteMutation.graphql");};







function sharedUpdater(store, user, deletedId) {
  const userProxy = store.get(user.id);

  const connection = _relayRuntime.ConnectionHandler.getConnection(
  userProxy,
  'InscriptioList_Inscriptios');

  if (connection) {
    _relayRuntime.ConnectionHandler.deleteNode(connection, deletedId);
  }
}

function commit(environment, user, aInscriptio) {
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: { id: aInscriptio.id } },


    updater(store) {
      const payload = store.getRootField('InscriptioDelete');
      sharedUpdater(store, user, payload.getValue('deletedId'));
    },

    optimisticUpdater(store) {
      sharedUpdater(store, user, aInscriptio.id);
    } });

}var _default =

{ commit };exports.default = _default;
//# sourceMappingURL=InscriptioDeleteMutation.js.map