/**
 * 
 * @relayHash 1152fdf69dece647b060e7c18e7b9f01
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type TranslaticiarumDeleteInput = {|
                id: string,
                clientMutationId?: ?string,
              |};
              export type TranslaticiarumDeleteMutationVariables = {|
                input: TranslaticiarumDeleteInput
              |};
              export type TranslaticiarumDeleteMutationResponse = {|
                +TranslaticiarumDelete: ?{|
                  +deletedId: ?string
                |}
              |};
              export type TranslaticiarumDeleteMutation = {|
                variables: TranslaticiarumDeleteMutationVariables,
                response: TranslaticiarumDeleteMutationResponse,
              |};
              */


/*
                 mutation TranslaticiarumDeleteMutation(
                   $input: TranslaticiarumDeleteInput!
                 ) {
                   TranslaticiarumDelete(input: $input) {
                     deletedId
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "TranslaticiarumDeleteInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "TranslaticiarumDelete",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "TranslaticiarumDeleteInput!" }],


    "concreteType": "TranslaticiarumDeletePayload",
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
      "name": "TranslaticiarumDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "TranslaticiarumDeleteMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "TranslaticiarumDeleteMutation",
      "id": null,
      "text": "mutation TranslaticiarumDeleteMutation(\n  $input: TranslaticiarumDeleteInput!\n) {\n  TranslaticiarumDelete(input: $input) {\n    deletedId\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = '70d44d37e888c4c436b6994d54b0692f';
module.exports = node;
//# sourceMappingURL=TranslaticiarumDeleteMutation.graphql.js.map