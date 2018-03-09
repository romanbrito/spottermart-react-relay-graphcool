/**
 * @flow
 * @relayHash 24446a5cba8a9aa1ccd546ee4334db5b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type UpdateAssetMutationVariables = {|
  input: {
    address?: ?string,
    alcoholLicense?: ?boolean,
    businessName?: ?string,
    businessType?: ?string,
    city?: ?string,
    description?: ?string,
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
    id: string,
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
    socialMedia?: ?$ReadOnlyArray<any>,
    socialMediaRating?: ?$ReadOnlyArray<any>,
    specialFeatures?: ?string,
    state?: ?string,
    status?: ?string,
    structure?: ?string,
    termOfLease?: ?string,
    website?: ?string,
    whySelling?: ?string,
    zipCode?: ?string,
    postedById?: ?string,
    clientMutationId: string,
  },
|};
export type UpdateAssetMutationResponse = {|
  +updateAsset: ?{|
    +asset: ?{|
      +id: string,
    |},
  |},
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

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateAssetInput!",
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
];
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateAssetMutation",
    "selections": v1,
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UpdateAssetMutation",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "UpdateAssetMutation",
    "operation": "mutation",
    "selections": v1
  },
  "text": "mutation UpdateAssetMutation(\n  $input: UpdateAssetInput!\n) {\n  updateAsset(input: $input) {\n    asset {\n      id\n    }\n  }\n}\n"
};
})();

module.exports = batch;
