/**
 * @flow
 * @relayHash 40b15d5d9b3fd428f2a8fed2de01d30f
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
    equipment?: ?$ReadOnlyArray<string>,
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
    socialMediaRating?: ?string,
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
      id
      createdAt
      businessName
      price
      postedBy {
        id
        name
      }
      description
      city
      state
      zipCode
      pictures
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateAssetInput!"
      }
    ],
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
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "createdAt",
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
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "postedBy",
            "plural": false,
            "selections": [
              v1,
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
    "name": "CreateAssetMutation",
    "selections": v2,
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
    "selections": v2
  },
  "text": "mutation CreateAssetMutation(\n  $input: CreateAssetInput!\n) {\n  createAsset(input: $input) {\n    asset {\n      id\n      createdAt\n      businessName\n      price\n      postedBy {\n        id\n        name\n      }\n      description\n      city\n      state\n      zipCode\n      pictures\n    }\n  }\n}\n"
};
})();

module.exports = batch;
