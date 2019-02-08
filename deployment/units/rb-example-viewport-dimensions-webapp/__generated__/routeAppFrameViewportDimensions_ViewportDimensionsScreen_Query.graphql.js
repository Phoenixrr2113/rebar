/**
 * 
 * @relayHash 34fc12e0f14085cbef3d499df490e0d9
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type ViewportDimensionsScreen_Viewer$ref = any;
              export type routeAppFrameViewportDimensions_ViewportDimensionsScreen_QueryVariables = {||};
              export type routeAppFrameViewportDimensions_ViewportDimensionsScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: ViewportDimensionsScreen_Viewer$ref
                |}
              |};
              export type routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query = {|
                variables: routeAppFrameViewportDimensions_ViewportDimensionsScreen_QueryVariables,
                response: routeAppFrameViewportDimensions_ViewportDimensionsScreen_QueryResponse,
              |};
              */


/*
                 query routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query {
                   Viewer {
                     ...ViewportDimensionsScreen_Viewer
                     id
                   }
                 }
                 
                 fragment ViewportDimensionsScreen_Viewer on Viewer {
                   id
                 }
                 */

const node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query",
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
        "name": "ViewportDimensionsScreen_Viewer",
        "args": null }] }] },





  "operation": {
    "kind": "Operation",
    "name": "routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query",
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
        "storageKey": null }] }] },





  "params": {
    "operationKind": "query",
    "name": "routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query",
    "id": null,
    "text": "query routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query {\n  Viewer {\n    ...ViewportDimensionsScreen_Viewer\n    id\n  }\n}\n\nfragment ViewportDimensionsScreen_Viewer on Viewer {\n  id\n}\n",
    "metadata": {} } };


// prettier-ignore
node /*: any*/.hash = 'fd4b596cb5564462f401210ca2e12734';
module.exports = node;
//# sourceMappingURL=routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query.graphql.js.map