/**
 * 
 * @relayHash 8a3c43de7afce10bd7c27ab0304fd74c
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type ToDoDeleteInput = {
                id: string,
                clientMutationId?: ?string,
              };
              export type ToDoDeleteMutationVariables = {|
                input: ToDoDeleteInput
              |};
              export type ToDoDeleteMutationResponse = {|
                +ToDoDelete: ?{|
                  +Viewer: ?{|
                    +ToDo_TotalCount: ?number,
                    +ToDo_CompletedCount: ?number,
                  |},
                  +deletedId: ?string,
                |}
              |};
              */


/*
                 mutation ToDoDeleteMutation(
                   $input: ToDoDeleteInput!
                 ) {
                   ToDoDelete(input: $input) {
                     Viewer {
                       ToDo_TotalCount
                       ToDo_CompletedCount
                       id
                     }
                     deletedId
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ToDoDeleteInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ToDoDeleteInput!" }],


  v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "ToDo_TotalCount",
    "args": null,
    "storageKey": null },

  v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "ToDo_CompletedCount",
    "args": null,
    "storageKey": null },

  v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "deletedId",
    "args": null,
    "storageKey": null };

  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "ToDoDeleteMutation",
    "id": null,
    "text": "mutation ToDoDeleteMutation(\n  $input: ToDoDeleteInput!\n) {\n  ToDoDelete(input: $input) {\n    Viewer {\n      ToDo_TotalCount\n      ToDo_CompletedCount\n      id\n    }\n    deletedId\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ToDoDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ToDoDelete",
        "storageKey": null,
        "args": v1,
        "concreteType": "ToDoDeletePayload",
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
          v2,
          v3] },


        v4] }] },




    "operation": {
      "kind": "Operation",
      "name": "ToDoDeleteMutation",
      "argumentDefinitions": v0,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ToDoDelete",
        "storageKey": null,
        "args": v1,
        "concreteType": "ToDoDeletePayload",
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
          v2,
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null }] },



        v4] }] } };





}();
// prettier-ignore
node /*: any*/.hash = 'a581035e0f38d5d8ad86368e6420b22c';
module.exports = node;
//# sourceMappingURL=ToDoDeleteMutation.graphql.js.map