/**
 * 
 * @relayHash f07a74c1babdced3e82d15abaf30cf7c
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type TranslaticiarumAddInput = {
                Translaticiarum_Start: string,
                Translaticiarum_Stop: string,
                Translaticiarum_Description: string,
                clientMutationId?: ?string,
              };
              export type TranslaticiarumAddMutationVariables = {|
                input: TranslaticiarumAddInput
              |};
              export type TranslaticiarumAddMutationResponse = {|
                +TranslaticiarumAdd: ?{|
                  +Viewer: ?{|
                    +id: string
                  |},
                  +TranslaticiarumsEdge: ?{|
                    +cursor: string,
                    +node: ?{|
                      +id: string,
                      +Translaticiarum_Start: ?any,
                      +Translaticiarum_Stop: ?any,
                      +Translaticiarum_Description: ?string,
                    |},
                  |},
                |}
              |};
              export type TranslaticiarumAddMutation = {|
                variables: TranslaticiarumAddMutationVariables,
                response: TranslaticiarumAddMutationResponse,
              |};
              */


/*
                 mutation TranslaticiarumAddMutation(
                   $input: TranslaticiarumAddInput!
                 ) {
                   TranslaticiarumAdd(input: $input) {
                     Viewer {
                       id
                     }
                     TranslaticiarumsEdge {
                       cursor
                       node {
                         id
                         Translaticiarum_Start
                         Translaticiarum_Stop
                         Translaticiarum_Description
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
    "type": "TranslaticiarumAddInput!",
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
    "name": "TranslaticiarumAdd",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "TranslaticiarumAddInput!" }],


    "concreteType": "TranslaticiarumAddPayload",
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
      v1] },


    {
      "kind": "LinkedField",
      "alias": null,
      "name": "TranslaticiarumsEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "TranslaticiarumsEdge",
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
        "concreteType": "Translaticiarum",
        "plural": false,
        "selections": [
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Translaticiarum_Start",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Translaticiarum_Stop",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Translaticiarum_Description",
          "args": null,
          "storageKey": null }] }] }] }];








  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "TranslaticiarumAddMutation",
    "id": null,
    "text": "mutation TranslaticiarumAddMutation(\n  $input: TranslaticiarumAddInput!\n) {\n  TranslaticiarumAdd(input: $input) {\n    Viewer {\n      id\n    }\n    TranslaticiarumsEdge {\n      cursor\n      node {\n        id\n        Translaticiarum_Start\n        Translaticiarum_Stop\n        Translaticiarum_Description\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "TranslaticiarumAddMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v2 },

    "operation": {
      "kind": "Operation",
      "name": "TranslaticiarumAddMutation",
      "argumentDefinitions": v0,
      "selections": v2 } };


}();
// prettier-ignore
node /*: any*/.hash = '166949cf589676ced2eb1821484d434c';
module.exports = node;
//# sourceMappingURL=TranslaticiarumAddMutation.graphql.js.map