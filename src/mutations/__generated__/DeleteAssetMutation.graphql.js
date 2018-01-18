/**
 * @flow
 * @relayHash e2a4bb220a9f33eed544c5a7d9dfc97f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeleteAssetMutationVariables = {|
  input: {
    id: string;
    clientMutationId: string;
  };
|};
export type DeleteAssetMutationResponse = {|
  +deleteAsset: ?{|
    +asset: ?{|
      +id: string;
    |};
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteAssetInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteAssetMutation",
    "selections": [
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
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DeleteAssetMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteAssetInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DeleteAssetMutation",
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
    ]
  },
  "text": "mutation DeleteAssetMutation(\n  $input: DeleteAssetInput!\n) {\n  deleteAsset(input: $input) {\n    asset {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
