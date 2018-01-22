/**
 * @flow
 * @relayHash fca4f71754210e7f2a375999f9d328a6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateMessageMutationVariables = {|
  input: {
    text: string;
    fromId?: ?string;
    toId?: ?string;
    clientMutationId: string;
  };
|};
export type CreateMessageMutationResponse = {|
  +createMessage: ?{|
    +message: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation CreateMessageMutation(
  $input: CreateMessageInput!
) {
  createMessage(input: $input) {
    message {
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
        "type": "CreateMessageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMessageMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateMessageInput!"
          }
        ],
        "concreteType": "CreateMessagePayload",
        "name": "createMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "message",
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
  "name": "CreateMessageMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateMessageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateMessageMutation",
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
            "type": "CreateMessageInput!"
          }
        ],
        "concreteType": "CreateMessagePayload",
        "name": "createMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "message",
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
  "text": "mutation CreateMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    message {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
