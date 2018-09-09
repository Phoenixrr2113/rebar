/**
 * 
 * @relayHash 3ddccacc81913fd1cbfffffc00042006
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type ToDoUpdateStatusInput = {
                id: string,
                ToDo_Complete: boolean,
                clientMutationId?: ?string,
              };
              export type ToDoUpdateStatusMutationVariables = {|
                input: ToDoUpdateStatusInput
              |};
              export type ToDoUpdateStatusMutationResponse = {|
                +ToDoUpdateStatus: ?{|
                  +Viewer: ?{|
                    +id: string,
                    +ToDo_CompletedCount: ?number,
                  |},
                  +ToDo: ?{|
                    +id: string,
                    +ToDo_Complete: ?boolean,
                  |},
                |}
              |};
              export type ToDoUpdateStatusMutation = {|
                variables: ToDoUpdateStatusMutationVariables,
                response: ToDoUpdateStatusMutationResponse,
              |};
              */


/*
                 mutation ToDoUpdateStatusMutation(
                   $input: ToDoUpdateStatusInput!
                 ) {
                   ToDoUpdateStatus(input: $input) {
                     Viewer {
                       id
                       ToDo_CompletedCount
                     }
                     ToDo {
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
    "type": "ToDoUpdateStatusInput!",
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
    "name": "ToDoUpdateStatus",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "ToDoUpdateStatusInput!" }],


    "concreteType": "ToDoUpdateStatusPayload",
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
        "name": "ToDo_CompletedCount",
        "args": null,
        "storageKey": null }] },



    {
      "kind": "LinkedField",
      "alias": null,
      "name": "ToDo",
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
        "storageKey": null }] }] }];






  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "ToDoUpdateStatusMutation",
    "id": null,
    "text": "mutation ToDoUpdateStatusMutation(\n  $input: ToDoUpdateStatusInput!\n) {\n  ToDoUpdateStatus(input: $input) {\n    Viewer {\n      id\n      ToDo_CompletedCount\n    }\n    ToDo {\n      id\n      ToDo_Complete\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ToDoUpdateStatusMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v2 },

    "operation": {
      "kind": "Operation",
      "name": "ToDoUpdateStatusMutation",
      "argumentDefinitions": v0,
      "selections": v2 } };


}();
// prettier-ignore
node /*: any*/.hash = '05dd206726300c3f5a9866475072d101';
module.exports = node;
//# sourceMappingURL=ToDoUpdateStatusMutation.graphql.js.map