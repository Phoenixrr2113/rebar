/**
 * 
 * @relayHash e9abef4c162db078a20aae4e4f2fe3ee
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type ToDoScreen_Viewer$ref = any;
              export type routeAppFrameTodo_ToDoScreen_QueryVariables = {||};
              export type routeAppFrameTodo_ToDoScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: ToDoScreen_Viewer$ref
                |}
              |};
              export type routeAppFrameTodo_ToDoScreen_Query = {|
                variables: routeAppFrameTodo_ToDoScreen_QueryVariables,
                response: routeAppFrameTodo_ToDoScreen_QueryResponse,
              |};
              */


/*
                 query routeAppFrameTodo_ToDoScreen_Query {
                   Viewer {
                     ...ToDoScreen_Viewer
                     id
                   }
                 }
                 
                 fragment ToDoScreen_Viewer on Viewer {
                   id
                 }
                 */

const node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "routeAppFrameTodo_ToDoScreen_Query",
  "id": null,
  "text": "query routeAppFrameTodo_ToDoScreen_Query {\n  Viewer {\n    ...ToDoScreen_Viewer\n    id\n  }\n}\n\nfragment ToDoScreen_Viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routeAppFrameTodo_ToDoScreen_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
        "kind": "FragmentSpread",
        "name": "ToDoScreen_Viewer",
        "args": null }] }] },





  "operation": {
    "kind": "Operation",
    "name": "routeAppFrameTodo_ToDoScreen_Query",
    "argumentDefinitions": [],
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
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null }] }] } };






// prettier-ignore
node /*: any*/.hash = 'a9ef7a4f1fcf9f2f638608c83eabb62a';
module.exports = node;
//# sourceMappingURL=routeAppFrameTodo_ToDoScreen_Query.graphql.js.map