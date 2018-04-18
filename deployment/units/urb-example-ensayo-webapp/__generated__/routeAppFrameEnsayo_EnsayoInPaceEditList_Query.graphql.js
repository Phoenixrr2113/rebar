/**
 * 
 * @relayHash 0d567f0325ee61aa9c103fe341e2755f
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type EnsayoInPaceEditList_Viewer$ref = any;
              export type routeAppFrameEnsayo_EnsayoInPaceEditList_QueryVariables = {| |};
              export type routeAppFrameEnsayo_EnsayoInPaceEditList_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: EnsayoInPaceEditList_Viewer$ref,
                |},
              |};
              */


/*
                 query routeAppFrameEnsayo_EnsayoInPaceEditList_Query {
                   Viewer {
                     ...EnsayoInPaceEditList_Viewer
                     id
                   }
                 }
                 
                 fragment EnsayoInPaceEditList_Viewer on Viewer {
                   Ensayos(first: 2147483647) {
                     edges {
                       node {
                         id
                         ...EnsayoInPlaceEditItem_Ensayo
                         __typename
                       }
                       cursor
                     }
                     pageInfo {
                       endCursor
                       hasNextPage
                     }
                   }
                   id
                   ...EnsayoInPlaceEditItem_Viewer
                 }
                 
                 fragment EnsayoInPlaceEditItem_Ensayo on Ensayo {
                   id
                   Ensayo_Title
                   Ensayo_Description
                   Ensayo_Content
                 }
                 
                 fragment EnsayoInPlaceEditItem_Viewer on Viewer {
                   id
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
    "name": "routeAppFrameEnsayo_EnsayoInPaceEditList_Query",
    "id": null,
    "text": "query routeAppFrameEnsayo_EnsayoInPaceEditList_Query {\n  Viewer {\n    ...EnsayoInPaceEditList_Viewer\n    id\n  }\n}\n\nfragment EnsayoInPaceEditList_Viewer on Viewer {\n  Ensayos(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...EnsayoInPlaceEditItem_Ensayo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  ...EnsayoInPlaceEditItem_Viewer\n}\n\nfragment EnsayoInPlaceEditItem_Ensayo on Ensayo {\n  id\n  Ensayo_Title\n  Ensayo_Description\n  Ensayo_Content\n}\n\nfragment EnsayoInPlaceEditItem_Viewer on Viewer {\n  id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "routeAppFrameEnsayo_EnsayoInPaceEditList_Query",
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
          "name": "EnsayoInPaceEditList_Viewer",
          "args": null }] }] },





    "operation": {
      "kind": "Operation",
      "name": "routeAppFrameEnsayo_EnsayoInPaceEditList_Query",
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
          "name": "Ensayos",
          "storageKey": "Ensayos(first:2147483647)",
          "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2147483647,
            "type": "Int" }],


          "concreteType": "EnsayosConnection",
          "plural": false,
          "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "EnsayosEdge",
            "plural": true,
            "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Ensayo",
              "plural": false,
              "selections": [
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "Ensayo_Title",
                "args": null,
                "storageKey": null },

              {
                "kind": "ScalarField",
                "alias": null,
                "name": "Ensayo_Description",
                "args": null,
                "storageKey": null },

              {
                "kind": "ScalarField",
                "alias": null,
                "name": "Ensayo_Content",
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
          "name": "Ensayos",
          "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2147483647,
            "type": "Int" }],


          "handle": "connection",
          "key": "EnsayoList_Ensayos",
          "filters": null },

        v0] }] } };





}();
node /*: any*/.hash = '8dffa05e0936fb4c9fcbc336d9b34400';
module.exports = node;
//# sourceMappingURL=routeAppFrameEnsayo_EnsayoInPaceEditList_Query.graphql.js.map