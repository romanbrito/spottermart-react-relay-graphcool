/**
 * @flow
 * @relayHash f840c6b625d657fb450eacb9738ae440
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type DeleteMessageMutationVariables = {|
  input: {
    id: string,
    clientMutationId: string,
  },
|};
export type DeleteMessageMutationResponse = {|
  +deleteMessage: ?{|
    +message: ?{|
      +id: string,
    |},
  |},
|};
*/


/*
mutation DeleteMessageMutation(
  $input: DeleteMessageInput!
) {
  deleteMessage(input: $input) {
    message {
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
    "type": "DeleteMessageInput!",
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
        "type": "DeleteMessageInput!"
      }
    ],
    "concreteType": "DeleteMessagePayload",
    "name": "deleteMessage",
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
];
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteMessageMutation",
    "selections": v1,
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DeleteMessageMutation",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "DeleteMessageMutation",
    "operation": "mutation",
    "selections": v1
  },
  "text": "mutation DeleteMessageMutation(\n  $input: DeleteMessageInput!\n) {\n  deleteMessage(input: $input) {\n    message {\n      id\n    }\n  }\n}\n"
};
})();

module.exports = batch;
