/**
 * @flow
 * @relayHash b249219958a104d5ddf6fe50a4b15939
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SingleAssetPageQueryResponse = {|
  +viewer: {|
    +Asset: ?{| |};
  |};
|};
*/


/*
query SingleAssetPageQuery(
  $businessName: String!
) {
  viewer {
    Asset(businessName: $businessName) {
      ...Asset_asset
      id
    }
    id
  }
}

fragment Asset_asset on Asset {
  id
  businessName
  price
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "businessName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleAssetPageQuery",
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
            "args": [
              {
                "kind": "Variable",
                "name": "businessName",
                "variableName": "businessName",
                "type": "String"
              }
            ],
            "concreteType": "Asset",
            "name": "Asset",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Asset_asset",
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
  "name": "SingleAssetPageQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "businessName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SingleAssetPageQuery",
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
            "args": [
              {
                "kind": "Variable",
                "name": "businessName",
                "variableName": "businessName",
                "type": "String"
              }
            ],
            "concreteType": "Asset",
            "name": "Asset",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "businessName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "price",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
    ]
  },
  "text": "query SingleAssetPageQuery(\n  $businessName: String!\n) {\n  viewer {\n    Asset(businessName: $businessName) {\n      ...Asset_asset\n      id\n    }\n    id\n  }\n}\n\nfragment Asset_asset on Asset {\n  id\n  businessName\n  price\n}\n"
};

module.exports = batch;
