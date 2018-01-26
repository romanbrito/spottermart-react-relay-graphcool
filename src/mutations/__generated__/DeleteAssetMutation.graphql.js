/**
 * @flow
 * @relayHash d5b81fba468032dace2e87d4ecc88b7a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type DeleteAssetMutationVariables = {|
  input: {
    id: string,
    clientMutationId: string,
  },
|};
export type DeleteAssetMutationResponse = {|
  +deleteAsset: ?{|
    +asset: ?{|
      +id: string,
    |},
  |},
|};
*/


/*
mutation DeleteAssetMutation(
  $input: DeleteAssetInput!
) {
  deleteAsset(input: $input) {
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
    "type": "DeleteAssetInput!",
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
        "type": "DeleteAssetInput!"
      }
    ],
    "concreteType": "DeleteAssetPayload",
    "name": "deleteAsset",
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
    "name": "DeleteAssetMutation",
    "selections": v1,
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DeleteAssetMutation",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "DeleteAssetMutation",
    "operation": "mutation",
    "selections": v1
  },
  "text": "mutation DeleteAssetMutation(\n  $input: DeleteAssetInput!\n) {\n  deleteAsset(input: $input) {\n    asset {\n      id\n    }\n  }\n}\n"
};
})();

module.exports = batch;
