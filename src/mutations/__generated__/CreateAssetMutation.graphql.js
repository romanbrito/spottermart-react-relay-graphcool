/**
 * @flow
 * @relayHash d8c48c74743e9798b07772acdd55209b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type CreateAssetMutationVariables = {|
  input: {
    address?: ?string,
    alcoholLicense?: ?boolean,
    businessName: string,
    businessType?: ?string,
    city: string,
    description: string,
    equipment?: ?$ReadOnlyArray<any>,
    franchiseBool?: ?boolean,
    franchiseMarketingFee?: ?string,
    franchiseRoyalties?: ?string,
    franchiseTraining?: ?string,
    franchiseTransferFee?: ?string,
    franchiseYearsRemaining?: ?string,
    fullTimeEmployees?: ?string,
    grossIncome?: ?string,
    hoursOfOperation?: ?string,
    howLongInOperation?: ?string,
    howManySeats?: ?string,
    insideSqFeet?: ?string,
    netIncome?: ?string,
    notes?: ?string,
    owned?: ?boolean,
    ownerFinance?: ?string,
    partTimeEmployees?: ?string,
    pictures?: ?$ReadOnlyArray<any>,
    price?: ?string,
    rentNNN?: ?string,
    requirementsToQualify?: ?string,
    socialMedia?: ?$ReadOnlyArray<string>,
    socialMediaRating?: ?$ReadOnlyArray<any>,
    specialFeatures?: ?string,
    state: string,
    status?: ?string,
    structure?: ?string,
    termOfLease?: ?string,
    website?: ?string,
    whySelling?: ?string,
    zipCode: string,
    postedById?: ?string,
    clientMutationId: string,
  },
|};
export type CreateAssetMutationResponse = {|
  +createAsset: ?{|
    +asset: ?{|
      +id: string,
      +createdAt: any,
      +businessName: string,
      +price: ?string,
      +postedBy: ?{|
        +id: string,
        +name: string,
      |},
      +description: string,
      +city: string,
      +state: string,
      +zipCode: string,
      +pictures: ?$ReadOnlyArray<any>,
      +equipment: ?$ReadOnlyArray<any>,
      +socialMedia: ?$ReadOnlyArray<string>,
    |},
  |},
|};
*/


/*
mutation CreateAssetMutation(
  $input: CreateAssetInput!
) {
  createAsset(input: $input) {
    asset {
      createdAt
      city
      businessName
      price
      postedBy {
        id
        name
      }
      description
      id
      state
      zipCode
      pictures
      equipment
      socialMedia
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateAssetInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateAssetInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "city",
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "id",
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "businessName",
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "price",
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "args": null,
  "concreteType": "User",
  "name": "postedBy",
  "plural": false,
  "selections": [
    v3,
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
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "description",
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "createdAt",
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "state",
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "zipCode",
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "pictures",
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "equipment",
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "socialMedia",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateAssetMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": v1,
        "concreteType": "CreateAssetPayload",
        "name": "createAsset",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "name": "asset",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              v5,
              v6,
              v7,
              v8,
              v9,
              v10,
              v11,
              v12,
              v13
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateAssetMutation",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "CreateAssetMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": v1,
        "concreteType": "CreateAssetPayload",
        "name": "createAsset",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "name": "asset",
            "plural": false,
            "selections": [
              v3,
              v8,
              v4,
              v5,
              v6,
              v7,
              v2,
              v9,
              v10,
              v11,
              v12,
              v13
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateAssetMutation(\n  $input: CreateAssetInput!\n) {\n  createAsset(input: $input) {\n    asset {\n      createdAt\n      city\n      businessName\n      price\n      postedBy {\n        id\n        name\n      }\n      description\n      id\n      state\n      zipCode\n      pictures\n      equipment\n      socialMedia\n    }\n  }\n}\n"
};
})();

module.exports = batch;
