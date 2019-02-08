/**
 * 
 * @relayHash e78c68f545eb607de71d964ec2df13c4
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type EnsayoDeleteInput = {|
                id: string,
                clientMutationId?: ?string,
              |};
              export type EnsayoDeleteMutationVariables = {|
                input: EnsayoDeleteInput
              |};
              export type EnsayoDeleteMutationResponse = {|
                +EnsayoDelete: ?{|
                  +deletedId: ?string
                |}
              |};
              export type EnsayoDeleteMutation = {|
                variables: EnsayoDeleteMutationVariables,
                response: EnsayoDeleteMutationResponse,
              |};
              */


/*
                 mutation EnsayoDeleteMutation(
                   $input: EnsayoDeleteInput!
                 ) {
                   EnsayoDelete(input: $input) {
                     deletedId
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EnsayoDeleteInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "EnsayoDelete",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "EnsayoDeleteInput!" }],


    "concreteType": "EnsayoDeletePayload",
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
      "name": "EnsayoDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "EnsayoDeleteMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v1 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "EnsayoDeleteMutation",
      "id": null,
      "text": "mutation EnsayoDeleteMutation(\n  $input: EnsayoDeleteInput!\n) {\n  EnsayoDelete(input: $input) {\n    deletedId\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = 'd8c8d964d97d923ef7f0e6c1d21ecfcb';
module.exports = node;
//# sourceMappingURL=EnsayoDeleteMutation.graphql.js.map