/**
 * 
 * @relayHash a003af77c6bf3d2de186aade1c77ad64
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type InscriptioDeleteInput = {|
                id: string,
                clientMutationId?: ?string,
              |};
              export type InscriptioDeleteMutationVariables = {|
                input: InscriptioDeleteInput
              |};
              export type InscriptioDeleteMutationResponse = {|
                +InscriptioDelete: ?{|
                  +deletedId: ?string
                |}
              |};
              export type InscriptioDeleteMutation = {|
                variables: InscriptioDeleteMutationVariables,
                response: InscriptioDeleteMutationResponse,
              |};
              */


/*
                 mutation InscriptioDeleteMutation(
                   $input: InscriptioDeleteInput!
                 ) {
                   InscriptioDelete(input: $input) {
                     deletedId
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "InscriptioDeleteInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "InscriptioDelete",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input" }],


    "concreteType": "InscriptioDeletePayload",
    "plural": false,
    "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "deletedId",
      "args": null,
      "storageKey": null }] }];




  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "InscriptioDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "InscriptioDeleteMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "InscriptioDeleteMutation",
      "id": null,
      "text": "mutation InscriptioDeleteMutation(\n  $input: InscriptioDeleteInput!\n) {\n  InscriptioDelete(input: $input) {\n    deletedId\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = 'b9103a4affbe1338f4d46c7f1b8b6f68';
module.exports = node;
//# sourceMappingURL=InscriptioDeleteMutation.graphql.js.map