/**
 * 
 * @relayHash f3a251dcef20ac9e52e64aa28c751eb4
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type TranslaticiarumUpdateInput = {
                id: string,
                Translaticiarum_Start: string,
                Translaticiarum_Stop: string,
                Translaticiarum_Description: string,
                clientMutationId?: ?string,
              };
              export type TranslaticiarumUpdateMutationVariables = {|
                input: TranslaticiarumUpdateInput
              |};
              export type TranslaticiarumUpdateMutationResponse = {|
                +TranslaticiarumUpdate: ?{|
                  +Translaticiarum: ?{|
                    +id: string,
                    +Translaticiarum_Start: ?any,
                    +Translaticiarum_Stop: ?any,
                    +Translaticiarum_Description: ?string,
                  |}
                |}
              |};
              export type TranslaticiarumUpdateMutation = {|
                variables: TranslaticiarumUpdateMutationVariables,
                response: TranslaticiarumUpdateMutationResponse,
              |};
              */


/*
                 mutation TranslaticiarumUpdateMutation(
                   $input: TranslaticiarumUpdateInput!
                 ) {
                   TranslaticiarumUpdate(input: $input) {
                     Translaticiarum {
                       id
                       Translaticiarum_Start
                       Translaticiarum_Stop
                       Translaticiarum_Description
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "TranslaticiarumUpdateInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "TranslaticiarumUpdate",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "TranslaticiarumUpdateInput!" }],


    "concreteType": "TranslaticiarumUpdatePayload",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "Translaticiarum",
      "storageKey": null,
      "args": null,
      "concreteType": "Translaticiarum",
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
        "storageKey": null }] }] }];






  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "TranslaticiarumUpdateMutation",
    "id": null,
    "text": "mutation TranslaticiarumUpdateMutation(\n  $input: TranslaticiarumUpdateInput!\n) {\n  TranslaticiarumUpdate(input: $input) {\n    Translaticiarum {\n      id\n      Translaticiarum_Start\n      Translaticiarum_Stop\n      Translaticiarum_Description\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "TranslaticiarumUpdateMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1 },

    "operation": {
      "kind": "Operation",
      "name": "TranslaticiarumUpdateMutation",
      "argumentDefinitions": v0,
      "selections": v1 } };


}();
// prettier-ignore
node /*: any*/.hash = '8384705e4c8229b03bad1377af59f920';
module.exports = node;
//# sourceMappingURL=TranslaticiarumUpdateMutation.graphql.js.map