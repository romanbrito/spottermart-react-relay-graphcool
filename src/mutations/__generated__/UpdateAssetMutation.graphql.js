/**
 * @flow
 * @relayHash 3371d4643367c5ae5f0f691ef425e1c3
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UpdateAssetMutationVariables = {|
  input: {
    address?: ?string;
    alcoholLicense?: ?boolean;
    businessName?: ?string;
    businessType?: ?string;
    city?: ?string;
    description?: ?string;
    equipment?: ?$ReadOnlyArray<string>;
    franchiseBool?: ?boolean;
    franchiseMarketingFee?: ?string;
    franchiseRoyalties?: ?string;
    franchiseTraining?: ?string;
    franchiseTransferFee?: ?string;
    franchiseYearsRemaining?: ?string;
    fullTimeEmployees?: ?string;
    grossIncome?: ?string;
    hoursOfOperation?: ?string;
    howLongInOperation?: ?string;
    howManySeats?: ?string;
    id: string;
    insideSqFeet?: ?string;
    netIncome?: ?string;
    notes?: ?string;
    owned?: ?boolean;
    ownerFinance?: ?string;
    partTimeEmployees?: ?string;
    pictures?: ?$ReadOnlyArray<any>;
    price?: ?string;
    rentNNN?: ?string;
    requirementsToQualify?: ?string;
    socialMedia?: ?$ReadOnlyArray<string>;
    socialMediaRating?: ?string;
    specialFeatures?: ?string;
    state?: ?string;
    status?: ?string;
    structure?: ?string;
    termOfLease?: ?string;
    website?: ?string;
    whySelling?: ?string;
    zipCode?: ?string;
    postedById?: ?string;
    clientMutationId: string;
  };
|};
export type UpdateAssetMutationResponse = {|
  +updateAsset: ?{|
    +asset: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation UpdateAssetMutation(
  $input: UpdateAssetInput!
) {
  updateAsset(input: $input) {
    asset {
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateAssetInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateAssetMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateAssetInput!"
          }
        ],
        "concreteType": "UpdateAssetPayload",
        "name": "updateAsset",
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
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UpdateAssetMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateAssetInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UpdateAssetMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateAssetInput!"
          }
        ],
        "concreteType": "UpdateAssetPayload",
        "name": "updateAsset",
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
    ]
  },
  "text": "mutation UpdateAssetMutation(\n  $input: UpdateAssetInput!\n) {\n  updateAsset(input: $input) {\n    asset {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
