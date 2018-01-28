/**
 * @flow
 * @relayHash 458afa16ebe2f2db3ecdddde1d083d1a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
type Profile_User = any;
export type ProfilePageQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +__fragments: FragmentReference<Profile_User>,
    |},
  |},
|};
*/


/*
query ProfilePageQuery(
  $userId: ID!
) {
  viewer {
    User(id: $userId) {
      ...Profile_User
      id
    }
    id
  }
}

fragment Profile_User on User {
  id
  email
  name
}
*/

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId",
    "type": "ID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfilePageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": v1,
            "concreteType": "User",
            "name": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Profile_User",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ProfilePageQuery",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "ProfilePageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": v1,
            "concreteType": "User",
            "name": "User",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          v2
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ProfilePageQuery(\n  $userId: ID!\n) {\n  viewer {\n    User(id: $userId) {\n      ...Profile_User\n      id\n    }\n    id\n  }\n}\n\nfragment Profile_User on User {\n  id\n  email\n  name\n}\n"
};
})();

module.exports = batch;
