/**
 * @flow
 * @relayHash 7db286afe21b2e2d4d00fa87de6f76bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
type Asset_asset = any;
export type SingleAssetPageQueryResponse = {|
  +viewer: {|
    +Asset: ?{|
      +__fragments: FragmentReference<Asset_asset>,
    |},
  |},
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
  state
  id
  price
  description
  city
  businessName
  zipCode
  pictures
  postedBy {
    id
    name
  }
  equipment
  socialMedia
}
*/

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "businessName",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "businessName",
    "variableName": "businessName",
    "type": "String"
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
            "args": v1,
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
    "argumentDefinitions": v0,
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "postedBy",
                "plural": false,
                "selections": [
                  v2,
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
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "equipment",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "socialMedia",
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
  "text": "query SingleAssetPageQuery(\n  $businessName: String!\n) {\n  viewer {\n    Asset(businessName: $businessName) {\n      ...Asset_asset\n      id\n    }\n    id\n  }\n}\n\nfragment Asset_asset on Asset {\n  state\n  id\n  price\n  description\n  city\n  businessName\n  zipCode\n  pictures\n  postedBy {\n    id\n    name\n  }\n  equipment\n  socialMedia\n}\n"
};
})();

module.exports = batch;
