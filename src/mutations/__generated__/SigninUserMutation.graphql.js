/**
 * @flow
 * @relayHash 85a56f4dd3b5b909c7449a949f63175a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type SigninUserMutationVariables = {|
  input: {
    email?: ?{
      email: string,
      password: string,
    },
    clientMutationId: string,
  },
|};
export type SigninUserMutationResponse = {|
  +signinUser: {|
    +token: ?string,
    +user: ?{|
      +id: string,
    |},
  |},
|};
*/


/*
mutation SigninUserMutation(
  $input: SigninUserInput!
) {
  signinUser(input: $input) {
    token
    user {
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SigninUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SigninUserInput!"
      }
    ],
    "concreteType": "SigninPayload",
    "name": "signinUser",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "token",
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "SigninUserMutation",
    "selections": v1,
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SigninUserMutation",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "SigninUserMutation",
    "operation": "mutation",
    "selections": v1
  },
  "text": "mutation SigninUserMutation(\n  $input: SigninUserInput!\n) {\n  signinUser(input: $input) {\n    token\n    user {\n      id\n    }\n  }\n}\n"
};
})();

module.exports = batch;
