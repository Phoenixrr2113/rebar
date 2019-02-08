/**
 * 
 * @relayHash 4b480e74c00d1c5b216dc58e004379b1
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type UserProfileScreen_Viewer$ref = any;
              export type routeAppFrameAccountManagement_UserProfileScreen_QueryVariables = {||};
              export type routeAppFrameAccountManagement_UserProfileScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: UserProfileScreen_Viewer$ref
                |}
              |};
              export type routeAppFrameAccountManagement_UserProfileScreen_Query = {|
                variables: routeAppFrameAccountManagement_UserProfileScreen_QueryVariables,
                response: routeAppFrameAccountManagement_UserProfileScreen_QueryResponse,
              |};
              */


/*
                 query routeAppFrameAccountManagement_UserProfileScreen_Query {
                   Viewer {
                     ...UserProfileScreen_Viewer
                     id
                   }
                 }
                 
                 fragment UserProfileScreen_Viewer on Viewer {
                   id
                   User_IsAnonymous
                   User_DisplayName
                   User_PrimaryEmail
                   User_PrimaryPhone
                 }
                 */

const node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routeAppFrameAccountManagement_UserProfileScreen_Query",
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
        "name": "UserProfileScreen_Viewer",
        "args": null }] }] },





  "operation": {
    "kind": "Operation",
    "name": "routeAppFrameAccountManagement_UserProfileScreen_Query",
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
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "User_IsAnonymous",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "User_DisplayName",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "User_PrimaryEmail",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "User_PrimaryPhone",
        "args": null,
        "storageKey": null }] }] },





  "params": {
    "operationKind": "query",
    "name": "routeAppFrameAccountManagement_UserProfileScreen_Query",
    "id": null,
    "text": "query routeAppFrameAccountManagement_UserProfileScreen_Query {\n  Viewer {\n    ...UserProfileScreen_Viewer\n    id\n  }\n}\n\nfragment UserProfileScreen_Viewer on Viewer {\n  id\n  User_IsAnonymous\n  User_DisplayName\n  User_PrimaryEmail\n  User_PrimaryPhone\n}\n",
    "metadata": {} } };


// prettier-ignore
node /*: any*/.hash = '86c0fd69fab10667ae14755453488393';
module.exports = node;
//# sourceMappingURL=routeAppFrameAccountManagement_UserProfileScreen_Query.graphql.js.map