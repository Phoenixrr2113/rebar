



/* eslint-disable */

'use strict';

/*::
              import type { ConcreteFragment } from 'relay-runtime';
              import type { FragmentReference } from "relay-runtime";
              declare export opaque type TranslaticiarumScreen_Viewer$ref: FragmentReference;
              export type TranslaticiarumScreen_Viewer = {|
                +Translaticiarums: ?{|
                  +edges: ?$ReadOnlyArray<?{|
                    +node: ?{|
                      +id: string,
                      +Translaticiarum_Description: ?string,
                      +Translaticiarum_Start: ?any,
                      +Translaticiarum_Stop: ?any,
                    |}
                  |}>
                |},
                +$refType: TranslaticiarumScreen_Viewer$ref,
              |};
              */


const node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TranslaticiarumScreen_Viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
    {
      "count": null,
      "cursor": null,
      "direction": "forward",
      "path": [
      "Translaticiarums"] }] },




  "argumentDefinitions": [],
  "selections": [
  {
    "kind": "LinkedField",
    "alias": "Translaticiarums",
    "name": "__TranslaticiarumScreen_Translaticiarums_connection",
    "storageKey": null,
    "args": null,
    "concreteType": "TranslaticiarumsConnection",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TranslaticiarumsEdge",
      "plural": true,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Translaticiarum",
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
          "name": "Translaticiarum_Description",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Translaticiarum_Start",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Translaticiarum_Stop",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "__typename",
          "args": null,
          "storageKey": null }] },



      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null }] },



    {
      "kind": "LinkedField",
      "alias": null,
      "name": "pageInfo",
      "storageKey": null,
      "args": null,
      "concreteType": "PageInfo",
      "plural": false,
      "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null }] }] }] };







// prettier-ignore
node /*: any*/.hash = 'f71272f1673eeb2851bcbd54fe8bc678';
module.exports = node;
//# sourceMappingURL=TranslaticiarumScreen_Viewer.graphql.js.map