/**
 * 
 * @relayHash 4d6d0965a69c2261301d635a031ee4d8
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type ToDoAddInput = {
                ToDo_Text: string,
                clientMutationId?: ?string,
              };
              export type ToDoAddMutationVariables = {|
                input: ToDoAddInput
              |};
              export type ToDoAddMutationResponse = {|
                +ToDoAdd: ?{|
                  +Viewer: ?{|
                    +id: string,
                    +ToDo_TotalCount: ?number,
                  |},
                  +ToDosEdge: ?{|
                    +cursor: string,
                    +node: ?{|
                      +id: string,
                      +ToDo_Complete: ?boolean,
                      +ToDo_Text: ?string,
                    |},
                  |},
                |}
              |};
              */


/*
                 mutation ToDoAddMutation(
                   $input: ToDoAddInput!
                 ) {
                   ToDoAdd(input: $input) {
                     Viewer {
                       id
                       ToDo_TotalCount
                     }
                     ToDosEdge {
                       cursor
                       node {
                         id
                         ToDo_Complete
                         ToDo_Text
                       }
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ToDoAddInput!",
    "defaultValue": null }],


  v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null },

  v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ToDoAdd",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "ToDoAddInput!" }],


    "concreteType": "ToDoAddPayload",
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
      v1,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ToDo_TotalCount",
        "args": null,
        "storageKey": null }] },



    {
      "kind": "LinkedField",
      "alias": null,
      "name": "ToDosEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "ToDosEdge",
      "plural": false,
      "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null },

      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "ToDo",
        "plural": false,
        "selections": [
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "ToDo_Complete",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "ToDo_Text",
          "args": null,
          "storageKey": null }] }] }] }];








  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "ToDoAddMutation",
    "id": null,
    "text": "mutation ToDoAddMutation(\n  $input: ToDoAddInput!\n) {\n  ToDoAdd(input: $input) {\n    Viewer {\n      id\n      ToDo_TotalCount\n    }\n    ToDosEdge {\n      cursor\n      node {\n        id\n        ToDo_Complete\n        ToDo_Text\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ToDoAddMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v2 },

    "operation": {
      "kind": "Operation",
      "name": "ToDoAddMutation",
      "argumentDefinitions": v0,
      "selections": v2 } };


}();
// prettier-ignore
node /*: any*/.hash = '684ae97e6e6d46d3fd07c9e663e1a314';
module.exports = node;
//# sourceMappingURL=ToDoAddMutation.graphql.js.map