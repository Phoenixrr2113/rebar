



/* eslint-disable */

'use strict';

/*::
              import type { ConcreteFragment } from 'relay-runtime';
              import type { FragmentReference } from 'relay-runtime';
              declare export opaque type EnsayoPublicItem_Viewer$ref: FragmentReference;
              export type EnsayoPublicItem_Viewer = {|
                +Ensayo: ?{|
                  +Ensayo_Title: ?string,
                  +Ensayo_Description: ?string,
                  +Ensayo_Content: ?string,
                |},
                +$refType: EnsayoPublicItem_Viewer$ref,
              |};
              */


const node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EnsayoPublicItem_Viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
  {
    "kind": "RootArgument",
    "name": "id",
    "type": "ID" }],


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
      "storageKey": null }] }] };





node /*: any*/.hash = 'c89d0591d3683ab3a528213ea89d139f';
module.exports = node;
//# sourceMappingURL=EnsayoPublicItem_Viewer.graphql.js.map