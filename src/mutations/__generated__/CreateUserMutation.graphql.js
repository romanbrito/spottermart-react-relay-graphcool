/**
 * @flow
 * @relayHash 9923766a14fd835f46664ff2ac3a8941
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type CreateUserMutationVariables = {|
  createUserInput: {
    name: string,
    assetsIds?: ?$ReadOnlyArray<string>,
    assets?: ?$ReadOnlyArray<{
      address?: ?string,
      alcoholLicense?: ?boolean,
      businessName: string,
      businessType?: ?string,
      city: string,
      description: string,
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
      state: string,
      status?: ?string,
      structure?: ?string,
      termOfLease?: ?string,
      website?: ?string,
      whySelling?: ?string,
      zipCode: string,
    }>,
    messagesIds?: ?$ReadOnlyArray<string>,
    messages?: ?$ReadOnlyArray<{
      text: string,
      toId?: ?string,
    }>,
    sentIds?: ?$ReadOnlyArray<string>,
    sent?: ?$ReadOnlyArray<{
      text: string,
      fromId?: ?string,
    }>,
    clientMutationId: string,
    authProvider: {
      email?: ?{
        email: string,
        password: string,
      },
    },
  },
  signinUserInput: {
    email?: any,
    clientMutationId: string,
  },
|};
export type CreateUserMutationResponse = {|
  +createUser: {|
    +user: ?{|
      +id: string,
    |},
  |},
  +signinUser: {|
    +token: ?string,
    +user: ?{|
      +id: string,
    |},
  |},
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

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
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
v1 = {
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
},
v2 = [
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
      v1
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
      v1
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": v0,
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateUserMutation",
    "selections": v2,
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateUserMutation",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "CreateUserMutation",
    "operation": "mutation",
    "selections": v2
  },
  "text": "mutation CreateUserMutation(\n  $createUserInput: SignupUserInput!\n  $signinUserInput: SigninUserInput!\n) {\n  createUser(input: $createUserInput) {\n    user {\n      id\n    }\n  }\n  signinUser(input: $signinUserInput) {\n    token\n    user {\n      id\n    }\n  }\n}\n"
};
})();

module.exports = batch;
