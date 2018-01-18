/**
 * @flow
 * @relayHash a480ee5d0ac20ab46cb94a9848cf4bb8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UpdateAssetPageQueryResponse = {|
  +viewer: {|
    +Asset: ?{| |};
  |};
|};
*/


/*
query UpdateAssetPageQuery(
  $assetId: ID!
) {
  viewer {
    Asset(id: $assetId) {
      ...UpdateAsset_asset
      id
    }
    id
  }
}

fragment UpdateAsset_asset on Asset {
  id
  businessName
  price
  description
  city
  state
  zipCode
  pictures
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "assetId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateAssetPageQuery",
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
                "name": "id",
                "variableName": "assetId",
                "type": "ID"
              }
            ],
            "concreteType": "Asset",
            "name": "Asset",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "UpdateAsset_asset",
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
  "name": "UpdateAssetPageQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "assetId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UpdateAssetPageQuery",
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
                "name": "id",
                "variableName": "assetId",
                "type": "ID"
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "city",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "state",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "zipCode",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "pictures",
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
  "text": "query UpdateAssetPageQuery(\n  $assetId: ID!\n) {\n  viewer {\n    Asset(id: $assetId) {\n      ...UpdateAsset_asset\n      id\n    }\n    id\n  }\n}\n\nfragment UpdateAsset_asset on Asset {\n  id\n  businessName\n  price\n  description\n  city\n  state\n  zipCode\n  pictures\n}\n"
};

module.exports = batch;
