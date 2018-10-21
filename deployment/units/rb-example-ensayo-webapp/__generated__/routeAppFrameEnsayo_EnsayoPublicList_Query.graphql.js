/**
 * 
 * @relayHash 38312c0b5b6d35ef4caeaeb91762b63d
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type EnsayoPublicList_Viewer$ref = any;
              export type routeAppFrameEnsayo_EnsayoPublicList_QueryVariables = {||};
              export type routeAppFrameEnsayo_EnsayoPublicList_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: EnsayoPublicList_Viewer$ref
                |}
              |};
              export type routeAppFrameEnsayo_EnsayoPublicList_Query = {|
                variables: routeAppFrameEnsayo_EnsayoPublicList_QueryVariables,
                response: routeAppFrameEnsayo_EnsayoPublicList_QueryResponse,
              |};
              */


/*
                 query routeAppFrameEnsayo_EnsayoPublicList_Query {
                   Viewer {
                     ...EnsayoPublicList_Viewer
                     id
                   }
                 }
                 
                 fragment EnsayoPublicList_Viewer on Viewer {
                   Ensayos(first: 2147483647) {
                     edges {
                       node {
                         id
                         Ensayo_Title
                         Ensayo_Description
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
    "name": "routeAppFrameEnsayo_EnsayoPublicList_Query",
    "id": null,
    "text": "query routeAppFrameEnsayo_EnsayoPublicList_Query {\n  Viewer {\n    ...EnsayoPublicList_Viewer\n    id\n  }\n}\n\nfragment EnsayoPublicList_Viewer on Viewer {\n  Ensayos(first: 2147483647) {\n    edges {\n      node {\n        id\n        Ensayo_Title\n        Ensayo_Description\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "routeAppFrameEnsayo_EnsayoPublicList_Query",
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
          "name": "EnsayoPublicList_Viewer",
          "args": null }] }] },





    "operation": {
      "kind": "Operation",
      "name": "routeAppFrameEnsayo_EnsayoPublicList_Query",
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
          "args": v0,
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
              v1,
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
          "args": v0,
          "handle": "connection",
          "key": "EnsayoPublicList_Ensayos",
          "filters": null },

        v1] }] } };





}();
// prettier-ignore
node /*: any*/.hash = '71297ef603df148c2085eae0625e0433';
module.exports = node;
//# sourceMappingURL=routeAppFrameEnsayo_EnsayoPublicList_Query.graphql.js.map