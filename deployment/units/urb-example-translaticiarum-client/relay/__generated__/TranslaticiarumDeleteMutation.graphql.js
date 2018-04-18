/**
 * 
 * @relayHash 93ea0d815ca162ba58c9bff67a788b0e
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type TranslaticiarumDeleteMutationVariables = {|
                input: {
                  id: string,
                  clientMutationId?: ?string,
                },
              |};
              export type TranslaticiarumDeleteMutationResponse = {|
                +TranslaticiarumDelete: ?{|
                  +deletedId: ?string,
                |},
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
    "operationKind": "mutation",
    "name": "TranslaticiarumDeleteMutation",
    "id": null,
    "text": "mutation TranslaticiarumDeleteMutation(\n  $input: TranslaticiarumDeleteInput!\n) {\n  TranslaticiarumDelete(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "TranslaticiarumDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1 },

    "operation": {
      "kind": "Operation",
      "name": "TranslaticiarumDeleteMutation",
      "argumentDefinitions": v0,
      "selections": v1 } };


}();
node /*: any*/.hash = '70d44d37e888c4c436b6994d54b0692f';
module.exports = node;
//# sourceMappingURL=TranslaticiarumDeleteMutation.graphql.js.map