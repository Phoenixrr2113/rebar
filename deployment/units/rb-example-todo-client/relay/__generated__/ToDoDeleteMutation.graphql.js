/**
 * 
 * @relayHash 7324f134c249e46c90850ae28c422e40
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type ToDoDeleteInput = {|
                id: string,
                clientMutationId?: ?string,
              |};
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
              export type ToDoDeleteMutation = {|
                variables: ToDoDeleteMutationVariables,
                response: ToDoDeleteMutationResponse,
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
    "variableName": "input" }],


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
    "fragment": {
      "kind": "Fragment",
      "name": "ToDoDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ToDoDelete",
        "storageKey": null,
        "args": v1 /*: any*/,
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
          v2 /*: any*/,
          v3 /*: any*/] },


        v4 /*: any*/] }] },




    "operation": {
      "kind": "Operation",
      "name": "ToDoDeleteMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ToDoDelete",
        "storageKey": null,
        "args": v1 /*: any*/,
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
          v2 /*: any*/,
          v3 /*: any*/,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null }] },



        v4 /*: any*/] }] },




    "params": {
      "operationKind": "mutation",
      "name": "ToDoDeleteMutation",
      "id": null,
      "text": "mutation ToDoDeleteMutation(\n  $input: ToDoDeleteInput!\n) {\n  ToDoDelete(input: $input) {\n    Viewer {\n      ToDo_TotalCount\n      ToDo_CompletedCount\n      id\n    }\n    deletedId\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = 'a581035e0f38d5d8ad86368e6420b22c';
module.exports = node;
//# sourceMappingURL=ToDoDeleteMutation.graphql.js.map