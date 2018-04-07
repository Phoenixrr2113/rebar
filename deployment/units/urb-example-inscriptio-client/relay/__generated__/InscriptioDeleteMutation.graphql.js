/**
 * 
 * @relayHash 72f76bf4bd8784582bfd5564f500e4cb
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type InscriptioDeleteMutationVariables = {|
                input: {
                  id: string,
                  clientMutationId?: ?string,
                },
              |};
              export type InscriptioDeleteMutationResponse = {|
                +InscriptioDelete: ?{|
                  +deletedId: ?string,
                |},
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
      "variableName": "input",
      "type": "InscriptioDeleteInput!" }],


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
    "operationKind": "mutation",
    "name": "InscriptioDeleteMutation",
    "id": null,
    "text": "mutation InscriptioDeleteMutation(\n  $input: InscriptioDeleteInput!\n) {\n  InscriptioDelete(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "InscriptioDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1 },

    "operation": {
      "kind": "Operation",
      "name": "InscriptioDeleteMutation",
      "argumentDefinitions": v0,
      "selections": v1 } };


}();
node /*: any*/.hash = 'b9103a4affbe1338f4d46c7f1b8b6f68';
module.exports = node;
//# sourceMappingURL=InscriptioDeleteMutation.graphql.js.map