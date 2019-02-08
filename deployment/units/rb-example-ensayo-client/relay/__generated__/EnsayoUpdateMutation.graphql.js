/**
 * 
 * @relayHash 9847c4ff333e4952f39d4fca0ec15c82
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type EnsayoUpdateInput = {|
                id: string,
                Ensayo_Title: string,
                Ensayo_Description: string,
                Ensayo_Content: string,
                clientMutationId?: ?string,
              |};
              export type EnsayoUpdateMutationVariables = {|
                input: EnsayoUpdateInput
              |};
              export type EnsayoUpdateMutationResponse = {|
                +EnsayoUpdate: ?{|
                  +Ensayo: ?{|
                    +id: string,
                    +Ensayo_Title: ?string,
                    +Ensayo_Description: ?string,
                    +Ensayo_Content: ?string,
                  |}
                |}
              |};
              export type EnsayoUpdateMutation = {|
                variables: EnsayoUpdateMutationVariables,
                response: EnsayoUpdateMutationResponse,
              |};
              */


/*
                 mutation EnsayoUpdateMutation(
                   $input: EnsayoUpdateInput!
                 ) {
                   EnsayoUpdate(input: $input) {
                     Ensayo {
                       id
                       Ensayo_Title
                       Ensayo_Description
                       Ensayo_Content
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EnsayoUpdateInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "EnsayoUpdate",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "EnsayoUpdateInput!" }],


    "concreteType": "EnsayoUpdatePayload",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "Ensayo",
      "storageKey": null,
      "args": null,
      "concreteType": "Ensayo",
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
        "name": "Ensayo_Title",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "Ensayo_Description",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "Ensayo_Content",
        "args": null,
        "storageKey": null }] }] }];






  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EnsayoUpdateMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "EnsayoUpdateMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "EnsayoUpdateMutation",
      "id": null,
      "text": "mutation EnsayoUpdateMutation(\n  $input: EnsayoUpdateInput!\n) {\n  EnsayoUpdate(input: $input) {\n    Ensayo {\n      id\n      Ensayo_Title\n      Ensayo_Description\n      Ensayo_Content\n    }\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = '6fc4902bbb734ef3ec064c06c70a2198';
module.exports = node;
//# sourceMappingURL=EnsayoUpdateMutation.graphql.js.map