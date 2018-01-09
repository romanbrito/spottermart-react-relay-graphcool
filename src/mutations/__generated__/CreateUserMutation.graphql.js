/**
 * @flow
 * @relayHash f6ae5c404fdc5b5cf3adbb7c6b7b857f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateUserMutationVariables = {|
  createUserInput: {
    name: string;
    assetsIds?: ?$ReadOnlyArray<string>;
    assets?: ?$ReadOnlyArray<{
      address?: ?string;
      alcoholLicense?: ?boolean;
      businessName: string;
      businessType?: ?string;
      city: string;
      description: string;
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
      state: string;
      status?: ?string;
      structure?: ?string;
      termOfLease?: ?string;
      website?: ?string;
      whySelling?: ?string;
      zipCode: string;
    }>;
    clientMutationId: string;
    authProvider: {
      email?: ?{
        email: string;
        password: string;
      };
    };
  };
  signinUserInput: {
    email?: ?{
      email: string;
      password: string;
    };
    clientMutationId: string;
  };
|};
export type CreateUserMutationResponse = {|
  +createUser: {|
    +user: ?{|
      +id: string;
    |};
  |};
  +signinUser: {|
    +token: ?string;
    +user: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation CreateUserMutation(
  $createUserInput: SignupUserInput!
  $signinUserInput: SigninUserInput!
) {
  createUser(input: $createUserInput) {
    user {
      id
    }
  }
  signinUser(input: $signinUserInput) {
    token
    user {
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
        "name": "createUserInput",
        "type": "SignupUserInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "signinUserInput",
        "type": "SigninUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateUserMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "createUserInput",
            "type": "SignupUserInput!"
          }
        ],
        "concreteType": "CreateUserPayload",
        "name": "createUser",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "user",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "signinUserInput",
            "type": "SigninUserInput!"
          }
        ],
        "concreteType": "SigninPayload",
        "name": "signinUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "user",
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
  "name": "CreateUserMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "createUserInput",
        "type": "SignupUserInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "signinUserInput",
        "type": "SigninUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateUserMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "createUserInput",
            "type": "SignupUserInput!"
          }
        ],
        "concreteType": "CreateUserPayload",
        "name": "createUser",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "user",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "signinUserInput",
            "type": "SigninUserInput!"
          }
        ],
        "concreteType": "SigninPayload",
        "name": "signinUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "user",
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
  "text": "mutation CreateUserMutation(\n  $createUserInput: SignupUserInput!\n  $signinUserInput: SigninUserInput!\n) {\n  createUser(input: $createUserInput) {\n    user {\n      id\n    }\n  }\n  signinUser(input: $signinUserInput) {\n    token\n    user {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
