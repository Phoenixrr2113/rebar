/**
 * 
 * @relayHash 51fe18bdc48253116a059a6778667037
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type InscriptioScreen_Viewer$ref = any;
              export type routeAppFrameInscriptio_InscriptioScreen_QueryVariables = {||};
              export type routeAppFrameInscriptio_InscriptioScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: InscriptioScreen_Viewer$ref
                |}
              |};
              export type routeAppFrameInscriptio_InscriptioScreen_Query = {|
                variables: routeAppFrameInscriptio_InscriptioScreen_QueryVariables,
                response: routeAppFrameInscriptio_InscriptioScreen_QueryResponse,
              |};
              */


/*
                 query routeAppFrameInscriptio_InscriptioScreen_Query {
                   Viewer {
                     ...InscriptioScreen_Viewer
                     id
                   }
                 }
                 
                 fragment InscriptioScreen_Viewer on Viewer {
                   Inscriptios(first: 2147483647) {
                     edges {
                       node {
                         id
                         Inscriptio_LocationLat
                         Inscriptio_LocationLon
                         __typename
                       }
                       cursor
                     }
                     pageInfo {
                       endCursor
                       hasNextPage
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647,
    "type": "Int" }],


  v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null };

  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "routeAppFrameInscriptio_InscriptioScreen_Query",
    "id": null,
    "text": "query routeAppFrameInscriptio_InscriptioScreen_Query {\n  Viewer {\n    ...InscriptioScreen_Viewer\n    id\n  }\n}\n\nfragment InscriptioScreen_Viewer on Viewer {\n  Inscriptios(first: 2147483647) {\n    edges {\n      node {\n        id\n        Inscriptio_LocationLat\n        Inscriptio_LocationLon\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "routeAppFrameInscriptio_InscriptioScreen_Query",
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
          "name": "InscriptioScreen_Viewer",
          "args": null }] }] },





    "operation": {
      "kind": "Operation",
      "name": "routeAppFrameInscriptio_InscriptioScreen_Query",
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
          "kind": "LinkedField",
          "alias": null,
          "name": "Inscriptios",
          "storageKey": "Inscriptios(first:2147483647)",
          "args": v0,
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
              v1,
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
              "storageKey": null }] }] },





        {
          "kind": "LinkedHandle",
          "alias": null,
          "name": "Inscriptios",
          "args": v0,
          "handle": "connection",
          "key": "InscriptioScreen_Inscriptios",
          "filters": null },

        v1] }] } };





}();
// prettier-ignore
node /*: any*/.hash = 'ff7f2f9265b15f5602a4ddd14fe712aa';
module.exports = node;
//# sourceMappingURL=routeAppFrameInscriptio_InscriptioScreen_Query.graphql.js.map