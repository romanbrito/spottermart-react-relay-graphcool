/**
 * @flow
 * @relayHash a2e402f2a18824cd6ba17622fa8837bb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
type UpdateAsset_asset = any;
export type UpdateAssetPageQueryResponse = {|
  +viewer: {|
    +Asset: ?{|
      +__fragments: FragmentReference<UpdateAsset_asset>,
    |},
  |},
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

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "assetId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "assetId",
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
            "args": v1,
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
    "argumentDefinitions": v0,
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
            "args": v1,
            "concreteType": "Asset",
            "name": "Asset",
            "plural": false,
            "selections": [
              v2,
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
          v2
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query UpdateAssetPageQuery(\n  $assetId: ID!\n) {\n  viewer {\n    Asset(id: $assetId) {\n      ...UpdateAsset_asset\n      id\n    }\n    id\n  }\n}\n\nfragment UpdateAsset_asset on Asset {\n  id\n  businessName\n  price\n  description\n  city\n  state\n  zipCode\n  pictures\n}\n"
};
})();

module.exports = batch;
