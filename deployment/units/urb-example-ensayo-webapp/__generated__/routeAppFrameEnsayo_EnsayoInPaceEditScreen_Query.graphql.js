/**
 * 
 * @relayHash e28e4917f7e45f9ff4d069bc0d0bae41
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type EnsayoInPaceEditScreen_Viewer$ref = any;
              export type routeAppFrameEnsayo_EnsayoInPaceEditScreen_QueryVariables = {| |};
              export type routeAppFrameEnsayo_EnsayoInPaceEditScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: EnsayoInPaceEditScreen_Viewer$ref,
                |},
              |};
              */


/*
                 query routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query {
                   Viewer {
                     ...EnsayoInPaceEditScreen_Viewer
                     id
                   }
                 }
                 
                 fragment EnsayoInPaceEditScreen_Viewer on Viewer {
                   id
                 }
                 */

const node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query",
  "id": null,
  "text": "query routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query {\n  Viewer {\n    ...EnsayoInPaceEditScreen_Viewer\n    id\n  }\n}\n\nfragment EnsayoInPaceEditScreen_Viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query",
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
        "name": "EnsayoInPaceEditScreen_Viewer",
        "args": null }] }] },





  "operation": {
    "kind": "Operation",
    "name": "routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query",
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






node /*: any*/.hash = '9d245c088169fbdc03599a436614b4f2';
module.exports = node;
//# sourceMappingURL=routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query.graphql.js.map