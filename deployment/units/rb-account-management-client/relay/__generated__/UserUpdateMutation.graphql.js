/**
 * 
 * @relayHash 219ab1b25d23babeca9cca71cdbbe0ac
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type UserUpdateInput = {|
                User_DisplayName: string,
                User_PrimaryEmail: string,
                User_PrimaryPhone: string,
                clientMutationId?: ?string,
              |};
              export type UserUpdateMutationVariables = {|
                input: UserUpdateInput
              |};
              export type UserUpdateMutationResponse = {|
                +UserUpdate: ?{|
                  +Viewer: ?{|
                    +User_DisplayName: ?string,
                    +User_PrimaryEmail: ?string,
                    +User_PrimaryPhone: ?string,
                  |}
                |}
              |};
              export type UserUpdateMutation = {|
                variables: UserUpdateMutationVariables,
                response: UserUpdateMutationResponse,
              |};
              */


/*
                 mutation UserUpdateMutation(
                   $input: UserUpdateInput!
                 ) {
                   UserUpdate(input: $input) {
                     Viewer {
                       User_DisplayName
                       User_PrimaryEmail
                       User_PrimaryPhone
                       id
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserUpdateInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input" }],


  v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "User_DisplayName",
    "args": null,
    "storageKey": null },

  v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "User_PrimaryEmail",
    "args": null,
    "storageKey": null },

  v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "User_PrimaryPhone",
    "args": null,
    "storageKey": null };

  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "UserUpdateMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "UserUpdate",
        "storageKey": null,
        "args": v1 /*: any*/,
        "concreteType": "UserUpdatePayload",
        "plural": false,
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
          v2 /*: any*/,
          v3 /*: any*/,
          v4 /*: any*/] }] }] },






    "operation": {
      "kind": "Operation",
      "name": "UserUpdateMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "UserUpdate",
        "storageKey": null,
        "args": v1 /*: any*/,
        "concreteType": "UserUpdatePayload",
        "plural": false,
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
          v2 /*: any*/,
          v3 /*: any*/,
          v4 /*: any*/,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null }] }] }] },







    "params": {
      "operationKind": "mutation",
      "name": "UserUpdateMutation",
      "id": null,
      "text": "mutation UserUpdateMutation(\n  $input: UserUpdateInput!\n) {\n  UserUpdate(input: $input) {\n    Viewer {\n      User_DisplayName\n      User_PrimaryEmail\n      User_PrimaryPhone\n      id\n    }\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = 'abeb70f0be768871d470d7f4f52a7e96';
module.exports = node;
//# sourceMappingURL=UserUpdateMutation.graphql.js.map