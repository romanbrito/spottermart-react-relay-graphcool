/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
type Message_message = any;
export type MessageList_User = {|
  +sent: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +__fragments: FragmentReference<Message_message>,
      |},
    |}>,
  |},
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "sent"
        ]
      }
    ]
  },
  "name": "MessageList_User",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "sent",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "id_ASC",
          "type": "MessageOrderBy"
        }
      ],
      "concreteType": "MessageConnection",
      "name": "__MessageList_sent_connection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "MessageEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Message",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Message_message",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "hasPreviousPage",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "startCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__MessageList_sent_connection{\"orderBy\":\"id_ASC\"}"
    }
  ],
  "type": "User"
};

module.exports = fragment;
