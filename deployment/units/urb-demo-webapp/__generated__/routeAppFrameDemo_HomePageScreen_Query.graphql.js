/**
 * 
 * @relayHash e2666ee365ff078b00ec44d7f1ec88f8
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type HomePageScreen_Viewer$ref = any;
              export type routeAppFrameDemo_HomePageScreen_QueryVariables = {||};
              export type routeAppFrameDemo_HomePageScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: HomePageScreen_Viewer$ref
                |}
              |};
              */


/*
                 query routeAppFrameDemo_HomePageScreen_Query {
                   Viewer {
                     ...HomePageScreen_Viewer
                     id
                   }
                 }
                 
                 fragment HomePageScreen_Viewer on Viewer {
                   id
                 }
                 */

const node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "routeAppFrameDemo_HomePageScreen_Query",
  "id": null,
  "text": "query routeAppFrameDemo_HomePageScreen_Query {\n  Viewer {\n    ...HomePageScreen_Viewer\n    id\n  }\n}\n\nfragment HomePageScreen_Viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routeAppFrameDemo_HomePageScreen_Query",
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
        "name": "HomePageScreen_Viewer",
        "args": null }] }] },





  "operation": {
    "kind": "Operation",
    "name": "routeAppFrameDemo_HomePageScreen_Query",
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
node /*: any*/.hash = 'dd5a657362a3fea622cbb7f0dfde2a72';
module.exports = node;
//# sourceMappingURL=routeAppFrameDemo_HomePageScreen_Query.graphql.js.map