/**
 * 
 * @relayHash 0f37ca495170c2c3b090ae3b5c7f778a
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type EnsayoPublicItem_Viewer$ref = any;
              export type routeAppFrameEnsayo_EnsayoPublicItem_QueryVariables = {|
                id: string
              |};
              export type routeAppFrameEnsayo_EnsayoPublicItem_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: EnsayoPublicItem_Viewer$ref
                |}
              |};
              export type routeAppFrameEnsayo_EnsayoPublicItem_Query = {|
                variables: routeAppFrameEnsayo_EnsayoPublicItem_QueryVariables,
                response: routeAppFrameEnsayo_EnsayoPublicItem_QueryResponse,
              |};
              */


/*
                 query routeAppFrameEnsayo_EnsayoPublicItem_Query(
                   $id: ID!
                 ) {
                   Viewer {
                     ...EnsayoPublicItem_Viewer
                     id
                   }
                 }
                 
                 fragment EnsayoPublicItem_Viewer on Viewer {
                   Ensayo(id: $id) {
                     Ensayo_Title
                     Ensayo_Description
                     Ensayo_Content
                     id
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null }],


  v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null };

  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "routeAppFrameEnsayo_EnsayoPublicItem_Query",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
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
          "name": "EnsayoPublicItem_Viewer",
          "args": null }] }] },





    "operation": {
      "kind": "Operation",
      "name": "routeAppFrameEnsayo_EnsayoPublicItem_Query",
      "argumentDefinitions": v0 /*: any*/,
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
          "name": "Ensayo",
          "storageKey": null,
          "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID" }],


          "concreteType": "Ensayo",
          "plural": false,
          "selections": [
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

          v1 /*: any*/] },


        v1 /*: any*/] }] },




    "params": {
      "operationKind": "query",
      "name": "routeAppFrameEnsayo_EnsayoPublicItem_Query",
      "id": null,
      "text": "query routeAppFrameEnsayo_EnsayoPublicItem_Query(\n  $id: ID!\n) {\n  Viewer {\n    ...EnsayoPublicItem_Viewer\n    id\n  }\n}\n\nfragment EnsayoPublicItem_Viewer on Viewer {\n  Ensayo(id: $id) {\n    Ensayo_Title\n    Ensayo_Description\n    Ensayo_Content\n    id\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = '2f4657c9a6e2c5334ae892d11fc4d966';
module.exports = node;
//# sourceMappingURL=routeAppFrameEnsayo_EnsayoPublicItem_Query.graphql.js.map