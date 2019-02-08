/**
 * 
 * @relayHash 7a3abfe40291389906693b410372f804
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type InscriptioUpdateInput = {|
                id: string,
                Inscriptio_LocationLat: string,
                Inscriptio_LocationLon: string,
                Inscriptio_Notes: string,
                clientMutationId?: ?string,
              |};
              export type InscriptioUpdateMutationVariables = {|
                input: InscriptioUpdateInput
              |};
              export type InscriptioUpdateMutationResponse = {|
                +InscriptioUpdate: ?{|
                  +Inscriptio: ?{|
                    +id: string,
                    +Inscriptio_LocationLat: ?string,
                    +Inscriptio_LocationLon: ?string,
                    +Inscriptio_Notes: ?string,
                  |}
                |}
              |};
              export type InscriptioUpdateMutation = {|
                variables: InscriptioUpdateMutationVariables,
                response: InscriptioUpdateMutationResponse,
              |};
              */


/*
                 mutation InscriptioUpdateMutation(
                   $input: InscriptioUpdateInput!
                 ) {
                   InscriptioUpdate(input: $input) {
                     Inscriptio {
                       id
                       Inscriptio_LocationLat
                       Inscriptio_LocationLon
                       Inscriptio_Notes
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "InscriptioUpdateInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "InscriptioUpdate",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "InscriptioUpdateInput!" }],


    "concreteType": "InscriptioUpdatePayload",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "Inscriptio",
      "storageKey": null,
      "args": null,
      "concreteType": "Inscriptio",
      "plural": false,
      "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "Inscriptio_LocationLat",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "Inscriptio_LocationLon",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "Inscriptio_Notes",
        "args": null,
        "storageKey": null }] }] }];






  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "InscriptioUpdateMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "InscriptioUpdateMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "InscriptioUpdateMutation",
      "id": null,
      "text": "mutation InscriptioUpdateMutation(\n  $input: InscriptioUpdateInput!\n) {\n  InscriptioUpdate(input: $input) {\n    Inscriptio {\n      id\n      Inscriptio_LocationLat\n      Inscriptio_LocationLon\n      Inscriptio_Notes\n    }\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = 'ee289cf589e5e4f348a97172e7be487e';
module.exports = node;
//# sourceMappingURL=InscriptioUpdateMutation.graphql.js.map