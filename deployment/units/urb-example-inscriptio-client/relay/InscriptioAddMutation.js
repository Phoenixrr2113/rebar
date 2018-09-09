"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactRelay = require("react-relay");
var _relayRuntime = require("relay-runtime"); //  weak

const mutation = function () {return require("./__generated__/InscriptioAddMutation.graphql");};


















function sharedUpdater(store, user, InscriptiosEdge) {
  const userProxy = store.get(user.id);

  const connection = _relayRuntime.ConnectionHandler.getConnection(
  userProxy,
  'InscriptioList_Inscriptios');

  if (connection) {
    _relayRuntime.ConnectionHandler.insertEdgeAfter(connection, InscriptiosEdge);
  }
}

let nextClientMutationId = 0;

function commit(
environment,
user,
Inscriptio_LocationLat,
Inscriptio_LocationLon,
Inscriptio_Notes)
{
  const clientMutationId = nextClientMutationId++;

  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        Inscriptio_LocationLat,
        Inscriptio_LocationLon,
        Inscriptio_Notes,
        clientMutationId } },



    updater(store) {
      const payload = store.getRootField('InscriptioAdd');
      sharedUpdater(store, user, payload.getLinkedRecord('InscriptiosEdge'));
    },

    optimisticUpdater(store) {
      const id = `client:InscriptioAdd:Inscriptio:${clientMutationId}`;
      const aInscriptio = store.create(id, 'Inscriptio');
      aInscriptio.setValue(Inscriptio_LocationLat, 'Inscriptio_LocationLat');
      aInscriptio.setValue(Inscriptio_LocationLon, 'Inscriptio_LocationLon');
      aInscriptio.setValue(Inscriptio_Notes, 'Inscriptio_Notes');
      aInscriptio.setValue(id, 'id');

      const InscriptiosEdge = store.create(
      `client:InscriptioAdd:InscriptiosEdge:${clientMutationId}`,
      'InscriptiosEdge');

      InscriptiosEdge.setLinkedRecord(aInscriptio, 'node');

      sharedUpdater(store, user, InscriptiosEdge);
    } });

}var _default =

{ commit };exports.default = _default;
//# sourceMappingURL=InscriptioAddMutation.js.map