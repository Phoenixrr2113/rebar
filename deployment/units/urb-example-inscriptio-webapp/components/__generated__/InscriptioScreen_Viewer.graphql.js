



/* eslint-disable */

'use strict';

/*::
              import type { ConcreteFragment } from 'relay-runtime';
              import type { FragmentReference } from 'relay-runtime';
              declare export opaque type InscriptioScreen_Viewer$ref: FragmentReference;
              export type InscriptioScreen_Viewer = {|
                +Inscriptios: ?{|
                  +edges: ?$ReadOnlyArray<?{|
                    +node: ?{|
                      +id: string,
                      +Inscriptio_LocationLat: ?string,
                      +Inscriptio_LocationLon: ?string,
                    |},
                  |}>,
                |},
                +$refType: InscriptioScreen_Viewer$ref,
              |};
              */


const node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "InscriptioScreen_Viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
    {
      "count": null,
      "cursor": null,
      "direction": "forward",
      "path": [
      "Inscriptios"] }] },




  "argumentDefinitions": [],
  "selections": [
  {
    "kind": "LinkedField",
    "alias": "Inscriptios",
    "name": "__InscriptioScreen_Inscriptios_connection",
    "storageKey": null,
    "args": null,
    "concreteType": "InscriptiosConnection",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "InscriptiosEdge",
      "plural": true,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Inscriptio",
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
          "name": "Inscriptio_LocationLat",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Inscriptio_LocationLon",
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







node /*: any*/.hash = '92c961c1febe672713cf4ec57908046b';
module.exports = node;
//# sourceMappingURL=InscriptioScreen_Viewer.graphql.js.map