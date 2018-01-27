/**
 * @flow
 * @relayHash 749e4d44c0f11b8fc48c482c00d40ce6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
type MessageList_User = any;
export type MessageListPageQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +__fragments: FragmentReference<MessageList_User>,
    |},
  |},
|};
*/


/*
query MessageListPageQuery(
  $userId: ID!
) {
  viewer {
    User(id: $userId) {
      ...MessageList_User
      id
    }
    id
  }
}

fragment MessageList_User on User {
  sent(last: 100, orderBy: id_ASC) {
    edges {
      node {
        __typename
        ...Message_message
        id
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment Message_message on Message {
  id
  text
  from {
    id
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId",
    "type": "ID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": v1,
            "concreteType": "User",
            "name": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "MessageList_User",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "MessageListPageQuery",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "MessageListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": v1,
            "concreteType": "User",
            "name": "User",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "id_ASC",
                    "type": "MessageOrderBy"
                  }
                ],
                "concreteType": "MessageConnection",
                "name": "sent",
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
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "__typename",
                            "storageKey": null
                          },
                          v2,
                          {
                            "kind": "InlineFragment",
                            "type": "Message",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "text",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "User",
                                "name": "from",
                                "plural": false,
                                "selections": [
                                  v2,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "name",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ]
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
                "storageKey": "sent{\"last\":100,\"orderBy\":\"id_ASC\"}"
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "id_ASC",
                    "type": "MessageOrderBy"
                  }
                ],
                "handle": "connection",
                "name": "sent",
                "key": "MessageList_sent",
                "filters": [
                  "orderBy"
                ]
              },
              v2
            ],
            "storageKey": null
          },
          v2
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query MessageListPageQuery(\n  $userId: ID!\n) {\n  viewer {\n    User(id: $userId) {\n      ...MessageList_User\n      id\n    }\n    id\n  }\n}\n\nfragment MessageList_User on User {\n  sent(last: 100, orderBy: id_ASC) {\n    edges {\n      node {\n        __typename\n        ...Message_message\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Message_message on Message {\n  id\n  text\n  from {\n    id\n    name\n  }\n}\n"
};
})();

module.exports = batch;
