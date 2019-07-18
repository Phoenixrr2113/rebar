/**
 * 
 * @relayHash 663865bbb85f89d70eadfeda9d12b87e
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type ToDoListUpdateMarkAllInput = {|
                ToDo_Complete: boolean,
                clientMutationId?: ?string,
              |};
              export type ToDoListUpdateMarkAllMutationVariables = {|
                input: ToDoListUpdateMarkAllInput,
                status: string,
              |};
              export type ToDoListUpdateMarkAllMutationResponse = {|
                +ToDoListUpdateMarkAll: ?{|
                  +Viewer: ?{|
                    +ToDos: ?{|
                      +edges: ?$ReadOnlyArray<?{|
                        +node: ?{|
                          +id: string,
                          +ToDo_Complete: ?boolean,
                          +ToDo_Text: ?string,
                        |}
                      |}>
                    |},
                    +id: string,
                    +ToDo_CompletedCount: ?number,
                  |},
                  +changedToDos: ?$ReadOnlyArray<?{|
                    +id: string,
                    +ToDo_Complete: ?boolean,
                  |}>,
                |}
              |};
              export type ToDoListUpdateMarkAllMutation = {|
                variables: ToDoListUpdateMarkAllMutationVariables,
                response: ToDoListUpdateMarkAllMutationResponse,
              |};
              */


/*
                 mutation ToDoListUpdateMarkAllMutation(
                   $input: ToDoListUpdateMarkAllInput!
                   $status: String!
                 ) {
                   ToDoListUpdateMarkAll(input: $input) {
                     Viewer {
                       ToDos(status: $status) {
                         edges {
                           node {
                             id
                             ToDo_Complete
                             ToDo_Text
                           }
                         }
                       }
                       id
                       ToDo_CompletedCount
                     }
                     changedToDos {
                       id
                       ToDo_Complete
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ToDoListUpdateMarkAllInput!",
    "defaultValue": null },

  {
    "kind": "LocalArgument",
    "name": "status",
    "type": "String!",
    "defaultValue": null }],


  v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null },

  v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "ToDo_Complete",
    "args": null,
    "storageKey": null },

  v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ToDoListUpdateMarkAll",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input" }],


    "concreteType": "ToDoListUpdateMarkAllPayload",
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
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "ToDos",
        "storageKey": null,
        "args": [
        {
          "kind": "Variable",
          "name": "status",
          "variableName": "status" }],


        "concreteType": "ToDosConnection",
        "plural": false,
        "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ToDosEdge",
          "plural": true,
          "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "ToDo",
            "plural": false,
            "selections": [
            v1 /*: any*/,
            v2 /*: any*/,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "ToDo_Text",
              "args": null,
              "storageKey": null }] }] }] },







      v1 /*: any*/,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ToDo_CompletedCount",
        "args": null,
        "storageKey": null }] },



    {
      "kind": "LinkedField",
      "alias": null,
      "name": "changedToDos",
      "storageKey": null,
      "args": null,
      "concreteType": "ToDo",
      "plural": true,
      "selections": [
      v1 /*: any*/,
      v2 /*: any*/] }] }];





  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "ToDoListUpdateMarkAllMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v3 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "ToDoListUpdateMarkAllMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v3 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "ToDoListUpdateMarkAllMutation",
      "id": null,
      "text": "mutation ToDoListUpdateMarkAllMutation(\n  $input: ToDoListUpdateMarkAllInput!\n  $status: String!\n) {\n  ToDoListUpdateMarkAll(input: $input) {\n    Viewer {\n      ToDos(status: $status) {\n        edges {\n          node {\n            id\n            ToDo_Complete\n            ToDo_Text\n          }\n        }\n      }\n      id\n      ToDo_CompletedCount\n    }\n    changedToDos {\n      id\n      ToDo_Complete\n    }\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = '18b2dc6ec26946a22a0803be1ba1d2f2';
module.exports = node;
//# sourceMappingURL=ToDoListUpdateMarkAllMutation.graphql.js.map