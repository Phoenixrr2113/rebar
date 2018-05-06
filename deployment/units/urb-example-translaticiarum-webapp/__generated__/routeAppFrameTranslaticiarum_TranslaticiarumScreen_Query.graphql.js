/**
 * 
 * @relayHash 223782bbf6c81449981e92021af4ec09
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type TranslaticiarumScreen_Viewer$ref = any;
              export type routeAppFrameTranslaticiarum_TranslaticiarumScreen_QueryVariables = {||};
              export type routeAppFrameTranslaticiarum_TranslaticiarumScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: TranslaticiarumScreen_Viewer$ref
                |}
              |};
              */


/*
                 query routeAppFrameTranslaticiarum_TranslaticiarumScreen_Query {
                   Viewer {
                     ...TranslaticiarumScreen_Viewer
                     id
                   }
                 }
                 
                 fragment TranslaticiarumScreen_Viewer on Viewer {
                   Translaticiarums(first: 2147483647) {
                     edges {
                       node {
                         id
                         Translaticiarum_Description
                         Translaticiarum_Start
                         Translaticiarum_Stop
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
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null };

  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "routeAppFrameTranslaticiarum_TranslaticiarumScreen_Query",
    "id": null,
    "text": "query routeAppFrameTranslaticiarum_TranslaticiarumScreen_Query {\n  Viewer {\n    ...TranslaticiarumScreen_Viewer\n    id\n  }\n}\n\nfragment TranslaticiarumScreen_Viewer on Viewer {\n  Translaticiarums(first: 2147483647) {\n    edges {\n      node {\n        id\n        Translaticiarum_Description\n        Translaticiarum_Start\n        Translaticiarum_Stop\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "routeAppFrameTranslaticiarum_TranslaticiarumScreen_Query",
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
          "name": "TranslaticiarumScreen_Viewer",
          "args": null }] }] },





    "operation": {
      "kind": "Operation",
      "name": "routeAppFrameTranslaticiarum_TranslaticiarumScreen_Query",
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
          "name": "Translaticiarums",
          "storageKey": "Translaticiarums(first:2147483647)",
          "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2147483647,
            "type": "Int" }],


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
              v0,
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
              "storageKey": null }] }] },





        {
          "kind": "LinkedHandle",
          "alias": null,
          "name": "Translaticiarums",
          "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2147483647,
            "type": "Int" }],


          "handle": "connection",
          "key": "TranslaticiarumScreen_Translaticiarums",
          "filters": null },

        v0] }] } };





}();
// prettier-ignore
node /*: any*/.hash = 'd937e1ad4a993ab33c34f408a8afe6dc';
module.exports = node;
//# sourceMappingURL=routeAppFrameTranslaticiarum_TranslaticiarumScreen_Query.graphql.js.map