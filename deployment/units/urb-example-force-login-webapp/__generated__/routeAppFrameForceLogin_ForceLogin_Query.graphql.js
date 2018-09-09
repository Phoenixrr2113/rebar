/**
 * 
 * @relayHash d40750ba76f96ab92a67ef094f34c02a
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type ForceLogin_Viewer$ref = any;
              export type routeAppFrameForceLogin_ForceLogin_QueryVariables = {||};
              export type routeAppFrameForceLogin_ForceLogin_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: ForceLogin_Viewer$ref
                |}
              |};
              export type routeAppFrameForceLogin_ForceLogin_Query = {|
                variables: routeAppFrameForceLogin_ForceLogin_QueryVariables,
                response: routeAppFrameForceLogin_ForceLogin_QueryResponse,
              |};
              */


/*
                 query routeAppFrameForceLogin_ForceLogin_Query {
                   Viewer {
                     ...ForceLogin_Viewer
                     id
                   }
                 }
                 
                 fragment ForceLogin_Viewer on Viewer {
                   User_IsAnonymous
                 }
                 */

const node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "routeAppFrameForceLogin_ForceLogin_Query",
  "id": null,
  "text": "query routeAppFrameForceLogin_ForceLogin_Query {\n  Viewer {\n    ...ForceLogin_Viewer\n    id\n  }\n}\n\nfragment ForceLogin_Viewer on Viewer {\n  User_IsAnonymous\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routeAppFrameForceLogin_ForceLogin_Query",
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
        "name": "ForceLogin_Viewer",
        "args": null }] }] },





  "operation": {
    "kind": "Operation",
    "name": "routeAppFrameForceLogin_ForceLogin_Query",
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
        "name": "User_IsAnonymous",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null }] }] } };






// prettier-ignore
node /*: any*/.hash = 'c6caf31fca5281f05d717603162982b7';
module.exports = node;
//# sourceMappingURL=routeAppFrameForceLogin_ForceLogin_Query.graphql.js.map