



/* eslint-disable */

'use strict';

/*::
              import type { ReaderFragment } from 'relay-runtime';
              type NavBarLoginButton_Viewer$ref = any;
              import type { FragmentReference } from "relay-runtime";
              declare export opaque type AppFrame_Viewer$ref: FragmentReference;
              export type AppFrame_Viewer = {|
                +UserToken2: ?string,
                +$fragmentRefs: NavBarLoginButton_Viewer$ref,
                +$refType: AppFrame_Viewer$ref,
              |};
              */


const node /*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AppFrame_Viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "UserToken2",
    "args": null,
    "storageKey": null },

  {
    "kind": "FragmentSpread",
    "name": "NavBarLoginButton_Viewer",
    "args": null }] };



// prettier-ignore
node /*: any*/.hash = 'd2d21205cf198c3560f270c0ab6040bd';
module.exports = node;
//# sourceMappingURL=AppFrame_Viewer.graphql.js.map