/**
 * @flow
 * @relayHash 81c6523c30cbd9c0c62ece3050e39ac1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
type MessageList_viewer = any;
export type MessageListPageQueryResponse = {|
  +viewer: {|
    +__fragments: FragmentReference<MessageList_viewer>,
  |},
|};
*/


/*
query MessageListPageQuery(
  $filter: MessageFilter!
) {
  viewer {
    ...MessageList_viewer
    id
  }
}

fragment MessageList_viewer on Viewer {
  allMessages(filter: $filter, last: 100, orderBy: id_ASC) {
    edges {
      node {
        ...Message_message
        id
      }
    }
    ... on MessageConnection {
      edges {
        cursor
        node {
          __typename
          id
        }
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
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
    "name": "filter",
    "type": "MessageFilter!",
    "defaultValue": null
  }
],
v1 = {
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
            "kind": "FragmentSpread",
            "name": "MessageList_viewer",
            "args": null
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
          v1,
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "filter",
                    "type": "MessageFilter"
                  },
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
                "name": "allMessages",
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
                          v1,
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
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "MessageConnection",
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
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "cursor",
                            "storageKey": null
                          },
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
                              }
                            ],
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
                    ]
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "filter",
                    "type": "MessageFilter"
                  },
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
                "name": "allMessages",
                "key": "MessageList_allMessages",
                "filters": [
                  "filter",
                  "orderBy"
                ]
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query MessageListPageQuery(\n  $filter: MessageFilter!\n) {\n  viewer {\n    ...MessageList_viewer\n    id\n  }\n}\n\nfragment MessageList_viewer on Viewer {\n  allMessages(filter: $filter, last: 100, orderBy: id_ASC) {\n    edges {\n      node {\n        ...Message_message\n        id\n      }\n    }\n    ... on MessageConnection {\n      edges {\n        cursor\n        node {\n          __typename\n          id\n        }\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nfragment Message_message on Message {\n  id\n  text\n  from {\n    id\n    name\n  }\n}\n"
};
})();

module.exports = batch;
