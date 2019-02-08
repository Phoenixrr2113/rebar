/**
 * 
 * @relayHash c3db19f033369205654d6b1cd5a326f5
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type InscriptioAddInput = {|
                Inscriptio_LocationLat: string,
                Inscriptio_LocationLon: string,
                Inscriptio_Notes: string,
                clientMutationId?: ?string,
              |};
              export type InscriptioAddMutationVariables = {|
                input: InscriptioAddInput
              |};
              export type InscriptioAddMutationResponse = {|
                +InscriptioAdd: ?{|
                  +Viewer: ?{|
                    +id: string
                  |},
                  +InscriptiosEdge: ?{|
                    +cursor: string,
                    +node: ?{|
                      +id: string,
                      +Inscriptio_LocationLat: ?string,
                      +Inscriptio_LocationLon: ?string,
                      +Inscriptio_Notes: ?string,
                    |},
                  |},
                |}
              |};
              export type InscriptioAddMutation = {|
                variables: InscriptioAddMutationVariables,
                response: InscriptioAddMutationResponse,
              |};
              */


/*
                 mutation InscriptioAddMutation(
                   $input: InscriptioAddInput!
                 ) {
                   InscriptioAdd(input: $input) {
                     Viewer {
                       id
                     }
                     InscriptiosEdge {
                       cursor
                       node {
                         id
                         Inscriptio_LocationLat
                         Inscriptio_LocationLon
                         Inscriptio_Notes
                       }
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "InscriptioAddInput!",
    "defaultValue": null }],


  v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null },

  v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "InscriptioAdd",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "InscriptioAddInput!" }],


    "concreteType": "InscriptioAddPayload",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "Viewer",
      "storageKey": null,
      "args": null,
      "concreteType": "Viewer",
      "plural": false,
      "selections": [
      v1 /*: any*/] },


    {
      "kind": "LinkedField",
      "alias": null,
      "name": "InscriptiosEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "InscriptiosEdge",
      "plural": false,
      "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null },

      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Inscriptio",
        "plural": false,
        "selections": [
        v1 /*: any*/,
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
          "storageKey": null }] }] }] }];








  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "InscriptioAddMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v2 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "InscriptioAddMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v2 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "InscriptioAddMutation",
      "id": null,
      "text": "mutation InscriptioAddMutation(\n  $input: InscriptioAddInput!\n) {\n  InscriptioAdd(input: $input) {\n    Viewer {\n      id\n    }\n    InscriptiosEdge {\n      cursor\n      node {\n        id\n        Inscriptio_LocationLat\n        Inscriptio_LocationLon\n        Inscriptio_Notes\n      }\n    }\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = '3efd95970eb7521d0c6d042eea17ce70';
module.exports = node;
//# sourceMappingURL=InscriptioAddMutation.graphql.js.map