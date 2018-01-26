/**
 * @flow
 * @relayHash f30fa9ed8089d7b843b0c5e174d0e1be
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type CreateMessageMutationVariables = {|
  input: {
    text: string,
    fromId?: ?string,
    toId?: ?string,
    clientMutationId: string,
  },
|};
export type CreateMessageMutationResponse = {|
  +createMessage: ?{|
    +message: ?{|
      +id: string,
    |},
  |},
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

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateMessageInput!",
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
];
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMessageMutation",
    "selections": v1,
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateMessageMutation",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "CreateMessageMutation",
    "operation": "mutation",
    "selections": v1
  },
  "text": "mutation CreateMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    message {\n      id\n    }\n  }\n}\n"
};
})();

module.exports = batch;
