/**
 * @flow
 * @relayHash 6642dff50629e706740d75782c0c064c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteBatch } from 'relay-runtime';
export type _ModelMutationType = ('CREATED' | 'DELETED' | 'UPDATED' | '%future added value');
export type NewMessageSubscriptionVariables = {|
  filter: {
    AND?: $ReadOnlyArray<any>,
    OR?: $ReadOnlyArray<any>,
    mutation_in?: ?$ReadOnlyArray<_ModelMutationType>,
    updatedFields_contains?: ?string,
    updatedFields_contains_every?: ?$ReadOnlyArray<string>,
    updatedFields_contains_some?: ?$ReadOnlyArray<string>,
    node?: ?{
      id?: ?string,
      id_not?: ?string,
      id_in?: ?$ReadOnlyArray<string>,
      id_not_in?: ?$ReadOnlyArray<string>,
      id_lt?: ?string,
      id_lte?: ?string,
      id_gt?: ?string,
      id_gte?: ?string,
      id_contains?: ?string,
      id_not_contains?: ?string,
      id_starts_with?: ?string,
      id_not_starts_with?: ?string,
      id_ends_with?: ?string,
      id_not_ends_with?: ?string,
      text?: ?string,
      text_not?: ?string,
      text_in?: ?$ReadOnlyArray<string>,
      text_not_in?: ?$ReadOnlyArray<string>,
      text_lt?: ?string,
      text_lte?: ?string,
      text_gt?: ?string,
      text_gte?: ?string,
      text_contains?: ?string,
      text_not_contains?: ?string,
      text_starts_with?: ?string,
      text_not_starts_with?: ?string,
      text_ends_with?: ?string,
      text_not_ends_with?: ?string,
      from?: ?{
        AND?: $ReadOnlyArray<any>,
        OR?: $ReadOnlyArray<any>,
        createdAt?: ?any,
        createdAt_not?: ?any,
        createdAt_in?: ?$ReadOnlyArray<any>,
        createdAt_not_in?: ?$ReadOnlyArray<any>,
        createdAt_lt?: ?any,
        createdAt_lte?: ?any,
        createdAt_gt?: ?any,
        createdAt_gte?: ?any,
        email?: ?string,
        email_not?: ?string,
        email_in?: ?$ReadOnlyArray<string>,
        email_not_in?: ?$ReadOnlyArray<string>,
        email_lt?: ?string,
        email_lte?: ?string,
        email_gt?: ?string,
        email_gte?: ?string,
        email_contains?: ?string,
        email_not_contains?: ?string,
        email_starts_with?: ?string,
        email_not_starts_with?: ?string,
        email_ends_with?: ?string,
        email_not_ends_with?: ?string,
        id?: ?string,
        id_not?: ?string,
        id_in?: ?$ReadOnlyArray<string>,
        id_not_in?: ?$ReadOnlyArray<string>,
        id_lt?: ?string,
        id_lte?: ?string,
        id_gt?: ?string,
        id_gte?: ?string,
        id_contains?: ?string,
        id_not_contains?: ?string,
        id_starts_with?: ?string,
        id_not_starts_with?: ?string,
        id_ends_with?: ?string,
        id_not_ends_with?: ?string,
        name?: ?string,
        name_not?: ?string,
        name_in?: ?$ReadOnlyArray<string>,
        name_not_in?: ?$ReadOnlyArray<string>,
        name_lt?: ?string,
        name_lte?: ?string,
        name_gt?: ?string,
        name_gte?: ?string,
        name_contains?: ?string,
        name_not_contains?: ?string,
        name_starts_with?: ?string,
        name_not_starts_with?: ?string,
        name_ends_with?: ?string,
        name_not_ends_with?: ?string,
        password?: ?string,
        password_not?: ?string,
        password_in?: ?$ReadOnlyArray<string>,
        password_not_in?: ?$ReadOnlyArray<string>,
        password_lt?: ?string,
        password_lte?: ?string,
        password_gt?: ?string,
        password_gte?: ?string,
        password_contains?: ?string,
        password_not_contains?: ?string,
        password_starts_with?: ?string,
        password_not_starts_with?: ?string,
        password_ends_with?: ?string,
        password_not_ends_with?: ?string,
        updatedAt?: ?any,
        updatedAt_not?: ?any,
        updatedAt_in?: ?$ReadOnlyArray<any>,
        updatedAt_not_in?: ?$ReadOnlyArray<any>,
        updatedAt_lt?: ?any,
        updatedAt_lte?: ?any,
        updatedAt_gt?: ?any,
        updatedAt_gte?: ?any,
        assets_every?: ?{
          AND?: $ReadOnlyArray<any>,
          OR?: $ReadOnlyArray<any>,
          address?: ?string,
          address_not?: ?string,
          address_in?: ?$ReadOnlyArray<string>,
          address_not_in?: ?$ReadOnlyArray<string>,
          address_lt?: ?string,
          address_lte?: ?string,
          address_gt?: ?string,
          address_gte?: ?string,
          address_contains?: ?string,
          address_not_contains?: ?string,
          address_starts_with?: ?string,
          address_not_starts_with?: ?string,
          address_ends_with?: ?string,
          address_not_ends_with?: ?string,
          alcoholLicense?: ?boolean,
          alcoholLicense_not?: ?boolean,
          businessName?: ?string,
          businessName_not?: ?string,
          businessName_in?: ?$ReadOnlyArray<string>,
          businessName_not_in?: ?$ReadOnlyArray<string>,
          businessName_lt?: ?string,
          businessName_lte?: ?string,
          businessName_gt?: ?string,
          businessName_gte?: ?string,
          businessName_contains?: ?string,
          businessName_not_contains?: ?string,
          businessName_starts_with?: ?string,
          businessName_not_starts_with?: ?string,
          businessName_ends_with?: ?string,
          businessName_not_ends_with?: ?string,
          businessType?: ?string,
          businessType_not?: ?string,
          businessType_in?: ?$ReadOnlyArray<string>,
          businessType_not_in?: ?$ReadOnlyArray<string>,
          businessType_lt?: ?string,
          businessType_lte?: ?string,
          businessType_gt?: ?string,
          businessType_gte?: ?string,
          businessType_contains?: ?string,
          businessType_not_contains?: ?string,
          businessType_starts_with?: ?string,
          businessType_not_starts_with?: ?string,
          businessType_ends_with?: ?string,
          businessType_not_ends_with?: ?string,
          city?: ?string,
          city_not?: ?string,
          city_in?: ?$ReadOnlyArray<string>,
          city_not_in?: ?$ReadOnlyArray<string>,
          city_lt?: ?string,
          city_lte?: ?string,
          city_gt?: ?string,
          city_gte?: ?string,
          city_contains?: ?string,
          city_not_contains?: ?string,
          city_starts_with?: ?string,
          city_not_starts_with?: ?string,
          city_ends_with?: ?string,
          city_not_ends_with?: ?string,
          createdAt?: ?any,
          createdAt_not?: ?any,
          createdAt_in?: ?$ReadOnlyArray<any>,
          createdAt_not_in?: ?$ReadOnlyArray<any>,
          createdAt_lt?: ?any,
          createdAt_lte?: ?any,
          createdAt_gt?: ?any,
          createdAt_gte?: ?any,
          description?: ?string,
          description_not?: ?string,
          description_in?: ?$ReadOnlyArray<string>,
          description_not_in?: ?$ReadOnlyArray<string>,
          description_lt?: ?string,
          description_lte?: ?string,
          description_gt?: ?string,
          description_gte?: ?string,
          description_contains?: ?string,
          description_not_contains?: ?string,
          description_starts_with?: ?string,
          description_not_starts_with?: ?string,
          description_ends_with?: ?string,
          description_not_ends_with?: ?string,
          franchiseBool?: ?boolean,
          franchiseBool_not?: ?boolean,
          franchiseMarketingFee?: ?string,
          franchiseMarketingFee_not?: ?string,
          franchiseMarketingFee_in?: ?$ReadOnlyArray<string>,
          franchiseMarketingFee_not_in?: ?$ReadOnlyArray<string>,
          franchiseMarketingFee_lt?: ?string,
          franchiseMarketingFee_lte?: ?string,
          franchiseMarketingFee_gt?: ?string,
          franchiseMarketingFee_gte?: ?string,
          franchiseMarketingFee_contains?: ?string,
          franchiseMarketingFee_not_contains?: ?string,
          franchiseMarketingFee_starts_with?: ?string,
          franchiseMarketingFee_not_starts_with?: ?string,
          franchiseMarketingFee_ends_with?: ?string,
          franchiseMarketingFee_not_ends_with?: ?string,
          franchiseRoyalties?: ?string,
          franchiseRoyalties_not?: ?string,
          franchiseRoyalties_in?: ?$ReadOnlyArray<string>,
          franchiseRoyalties_not_in?: ?$ReadOnlyArray<string>,
          franchiseRoyalties_lt?: ?string,
          franchiseRoyalties_lte?: ?string,
          franchiseRoyalties_gt?: ?string,
          franchiseRoyalties_gte?: ?string,
          franchiseRoyalties_contains?: ?string,
          franchiseRoyalties_not_contains?: ?string,
          franchiseRoyalties_starts_with?: ?string,
          franchiseRoyalties_not_starts_with?: ?string,
          franchiseRoyalties_ends_with?: ?string,
          franchiseRoyalties_not_ends_with?: ?string,
          franchiseTraining?: ?string,
          franchiseTraining_not?: ?string,
          franchiseTraining_in?: ?$ReadOnlyArray<string>,
          franchiseTraining_not_in?: ?$ReadOnlyArray<string>,
          franchiseTraining_lt?: ?string,
          franchiseTraining_lte?: ?string,
          franchiseTraining_gt?: ?string,
          franchiseTraining_gte?: ?string,
          franchiseTraining_contains?: ?string,
          franchiseTraining_not_contains?: ?string,
          franchiseTraining_starts_with?: ?string,
          franchiseTraining_not_starts_with?: ?string,
          franchiseTraining_ends_with?: ?string,
          franchiseTraining_not_ends_with?: ?string,
          franchiseTransferFee?: ?string,
          franchiseTransferFee_not?: ?string,
          franchiseTransferFee_in?: ?$ReadOnlyArray<string>,
          franchiseTransferFee_not_in?: ?$ReadOnlyArray<string>,
          franchiseTransferFee_lt?: ?string,
          franchiseTransferFee_lte?: ?string,
          franchiseTransferFee_gt?: ?string,
          franchiseTransferFee_gte?: ?string,
          franchiseTransferFee_contains?: ?string,
          franchiseTransferFee_not_contains?: ?string,
          franchiseTransferFee_starts_with?: ?string,
          franchiseTransferFee_not_starts_with?: ?string,
          franchiseTransferFee_ends_with?: ?string,
          franchiseTransferFee_not_ends_with?: ?string,
          franchiseYearsRemaining?: ?string,
          franchiseYearsRemaining_not?: ?string,
          franchiseYearsRemaining_in?: ?$ReadOnlyArray<string>,
          franchiseYearsRemaining_not_in?: ?$ReadOnlyArray<string>,
          franchiseYearsRemaining_lt?: ?string,
          franchiseYearsRemaining_lte?: ?string,
          franchiseYearsRemaining_gt?: ?string,
          franchiseYearsRemaining_gte?: ?string,
          franchiseYearsRemaining_contains?: ?string,
          franchiseYearsRemaining_not_contains?: ?string,
          franchiseYearsRemaining_starts_with?: ?string,
          franchiseYearsRemaining_not_starts_with?: ?string,
          franchiseYearsRemaining_ends_with?: ?string,
          franchiseYearsRemaining_not_ends_with?: ?string,
          fullTimeEmployees?: ?string,
          fullTimeEmployees_not?: ?string,
          fullTimeEmployees_in?: ?$ReadOnlyArray<string>,
          fullTimeEmployees_not_in?: ?$ReadOnlyArray<string>,
          fullTimeEmployees_lt?: ?string,
          fullTimeEmployees_lte?: ?string,
          fullTimeEmployees_gt?: ?string,
          fullTimeEmployees_gte?: ?string,
          fullTimeEmployees_contains?: ?string,
          fullTimeEmployees_not_contains?: ?string,
          fullTimeEmployees_starts_with?: ?string,
          fullTimeEmployees_not_starts_with?: ?string,
          fullTimeEmployees_ends_with?: ?string,
          fullTimeEmployees_not_ends_with?: ?string,
          grossIncome?: ?string,
          grossIncome_not?: ?string,
          grossIncome_in?: ?$ReadOnlyArray<string>,
          grossIncome_not_in?: ?$ReadOnlyArray<string>,
          grossIncome_lt?: ?string,
          grossIncome_lte?: ?string,
          grossIncome_gt?: ?string,
          grossIncome_gte?: ?string,
          grossIncome_contains?: ?string,
          grossIncome_not_contains?: ?string,
          grossIncome_starts_with?: ?string,
          grossIncome_not_starts_with?: ?string,
          grossIncome_ends_with?: ?string,
          grossIncome_not_ends_with?: ?string,
          hoursOfOperation?: ?string,
          hoursOfOperation_not?: ?string,
          hoursOfOperation_in?: ?$ReadOnlyArray<string>,
          hoursOfOperation_not_in?: ?$ReadOnlyArray<string>,
          hoursOfOperation_lt?: ?string,
          hoursOfOperation_lte?: ?string,
          hoursOfOperation_gt?: ?string,
          hoursOfOperation_gte?: ?string,
          hoursOfOperation_contains?: ?string,
          hoursOfOperation_not_contains?: ?string,
          hoursOfOperation_starts_with?: ?string,
          hoursOfOperation_not_starts_with?: ?string,
          hoursOfOperation_ends_with?: ?string,
          hoursOfOperation_not_ends_with?: ?string,
          howLongInOperation?: ?string,
          howLongInOperation_not?: ?string,
          howLongInOperation_in?: ?$ReadOnlyArray<string>,
          howLongInOperation_not_in?: ?$ReadOnlyArray<string>,
          howLongInOperation_lt?: ?string,
          howLongInOperation_lte?: ?string,
          howLongInOperation_gt?: ?string,
          howLongInOperation_gte?: ?string,
          howLongInOperation_contains?: ?string,
          howLongInOperation_not_contains?: ?string,
          howLongInOperation_starts_with?: ?string,
          howLongInOperation_not_starts_with?: ?string,
          howLongInOperation_ends_with?: ?string,
          howLongInOperation_not_ends_with?: ?string,
          howManySeats?: ?string,
          howManySeats_not?: ?string,
          howManySeats_in?: ?$ReadOnlyArray<string>,
          howManySeats_not_in?: ?$ReadOnlyArray<string>,
          howManySeats_lt?: ?string,
          howManySeats_lte?: ?string,
          howManySeats_gt?: ?string,
          howManySeats_gte?: ?string,
          howManySeats_contains?: ?string,
          howManySeats_not_contains?: ?string,
          howManySeats_starts_with?: ?string,
          howManySeats_not_starts_with?: ?string,
          howManySeats_ends_with?: ?string,
          howManySeats_not_ends_with?: ?string,
          id?: ?string,
          id_not?: ?string,
          id_in?: ?$ReadOnlyArray<string>,
          id_not_in?: ?$ReadOnlyArray<string>,
          id_lt?: ?string,
          id_lte?: ?string,
          id_gt?: ?string,
          id_gte?: ?string,
          id_contains?: ?string,
          id_not_contains?: ?string,
          id_starts_with?: ?string,
          id_not_starts_with?: ?string,
          id_ends_with?: ?string,
          id_not_ends_with?: ?string,
          insideSqFeet?: ?string,
          insideSqFeet_not?: ?string,
          insideSqFeet_in?: ?$ReadOnlyArray<string>,
          insideSqFeet_not_in?: ?$ReadOnlyArray<string>,
          insideSqFeet_lt?: ?string,
          insideSqFeet_lte?: ?string,
          insideSqFeet_gt?: ?string,
          insideSqFeet_gte?: ?string,
          insideSqFeet_contains?: ?string,
          insideSqFeet_not_contains?: ?string,
          insideSqFeet_starts_with?: ?string,
          insideSqFeet_not_starts_with?: ?string,
          insideSqFeet_ends_with?: ?string,
          insideSqFeet_not_ends_with?: ?string,
          netIncome?: ?string,
          netIncome_not?: ?string,
          netIncome_in?: ?$ReadOnlyArray<string>,
          netIncome_not_in?: ?$ReadOnlyArray<string>,
          netIncome_lt?: ?string,
          netIncome_lte?: ?string,
          netIncome_gt?: ?string,
          netIncome_gte?: ?string,
          netIncome_contains?: ?string,
          netIncome_not_contains?: ?string,
          netIncome_starts_with?: ?string,
          netIncome_not_starts_with?: ?string,
          netIncome_ends_with?: ?string,
          netIncome_not_ends_with?: ?string,
          notes?: ?string,
          notes_not?: ?string,
          notes_in?: ?$ReadOnlyArray<string>,
          notes_not_in?: ?$ReadOnlyArray<string>,
          notes_lt?: ?string,
          notes_lte?: ?string,
          notes_gt?: ?string,
          notes_gte?: ?string,
          notes_contains?: ?string,
          notes_not_contains?: ?string,
          notes_starts_with?: ?string,
          notes_not_starts_with?: ?string,
          notes_ends_with?: ?string,
          notes_not_ends_with?: ?string,
          owned?: ?boolean,
          owned_not?: ?boolean,
          ownerFinance?: ?string,
          ownerFinance_not?: ?string,
          ownerFinance_in?: ?$ReadOnlyArray<string>,
          ownerFinance_not_in?: ?$ReadOnlyArray<string>,
          ownerFinance_lt?: ?string,
          ownerFinance_lte?: ?string,
          ownerFinance_gt?: ?string,
          ownerFinance_gte?: ?string,
          ownerFinance_contains?: ?string,
          ownerFinance_not_contains?: ?string,
          ownerFinance_starts_with?: ?string,
          ownerFinance_not_starts_with?: ?string,
          ownerFinance_ends_with?: ?string,
          ownerFinance_not_ends_with?: ?string,
          partTimeEmployees?: ?string,
          partTimeEmployees_not?: ?string,
          partTimeEmployees_in?: ?$ReadOnlyArray<string>,
          partTimeEmployees_not_in?: ?$ReadOnlyArray<string>,
          partTimeEmployees_lt?: ?string,
          partTimeEmployees_lte?: ?string,
          partTimeEmployees_gt?: ?string,
          partTimeEmployees_gte?: ?string,
          partTimeEmployees_contains?: ?string,
          partTimeEmployees_not_contains?: ?string,
          partTimeEmployees_starts_with?: ?string,
          partTimeEmployees_not_starts_with?: ?string,
          partTimeEmployees_ends_with?: ?string,
          partTimeEmployees_not_ends_with?: ?string,
          price?: ?string,
          price_not?: ?string,
          price_in?: ?$ReadOnlyArray<string>,
          price_not_in?: ?$ReadOnlyArray<string>,
          price_lt?: ?string,
          price_lte?: ?string,
          price_gt?: ?string,
          price_gte?: ?string,
          price_contains?: ?string,
          price_not_contains?: ?string,
          price_starts_with?: ?string,
          price_not_starts_with?: ?string,
          price_ends_with?: ?string,
          price_not_ends_with?: ?string,
          rentNNN?: ?string,
          rentNNN_not?: ?string,
          rentNNN_in?: ?$ReadOnlyArray<string>,
          rentNNN_not_in?: ?$ReadOnlyArray<string>,
          rentNNN_lt?: ?string,
          rentNNN_lte?: ?string,
          rentNNN_gt?: ?string,
          rentNNN_gte?: ?string,
          rentNNN_contains?: ?string,
          rentNNN_not_contains?: ?string,
          rentNNN_starts_with?: ?string,
          rentNNN_not_starts_with?: ?string,
          rentNNN_ends_with?: ?string,
          rentNNN_not_ends_with?: ?string,
          requirementsToQualify?: ?string,
          requirementsToQualify_not?: ?string,
          requirementsToQualify_in?: ?$ReadOnlyArray<string>,
          requirementsToQualify_not_in?: ?$ReadOnlyArray<string>,
          requirementsToQualify_lt?: ?string,
          requirementsToQualify_lte?: ?string,
          requirementsToQualify_gt?: ?string,
          requirementsToQualify_gte?: ?string,
          requirementsToQualify_contains?: ?string,
          requirementsToQualify_not_contains?: ?string,
          requirementsToQualify_starts_with?: ?string,
          requirementsToQualify_not_starts_with?: ?string,
          requirementsToQualify_ends_with?: ?string,
          requirementsToQualify_not_ends_with?: ?string,
          specialFeatures?: ?string,
          specialFeatures_not?: ?string,
          specialFeatures_in?: ?$ReadOnlyArray<string>,
          specialFeatures_not_in?: ?$ReadOnlyArray<string>,
          specialFeatures_lt?: ?string,
          specialFeatures_lte?: ?string,
          specialFeatures_gt?: ?string,
          specialFeatures_gte?: ?string,
          specialFeatures_contains?: ?string,
          specialFeatures_not_contains?: ?string,
          specialFeatures_starts_with?: ?string,
          specialFeatures_not_starts_with?: ?string,
          specialFeatures_ends_with?: ?string,
          specialFeatures_not_ends_with?: ?string,
          state?: ?string,
          state_not?: ?string,
          state_in?: ?$ReadOnlyArray<string>,
          state_not_in?: ?$ReadOnlyArray<string>,
          state_lt?: ?string,
          state_lte?: ?string,
          state_gt?: ?string,
          state_gte?: ?string,
          state_contains?: ?string,
          state_not_contains?: ?string,
          state_starts_with?: ?string,
          state_not_starts_with?: ?string,
          state_ends_with?: ?string,
          state_not_ends_with?: ?string,
          status?: ?string,
          status_not?: ?string,
          status_in?: ?$ReadOnlyArray<string>,
          status_not_in?: ?$ReadOnlyArray<string>,
          status_lt?: ?string,
          status_lte?: ?string,
          status_gt?: ?string,
          status_gte?: ?string,
          status_contains?: ?string,
          status_not_contains?: ?string,
          status_starts_with?: ?string,
          status_not_starts_with?: ?string,
          status_ends_with?: ?string,
          status_not_ends_with?: ?string,
          structure?: ?string,
          structure_not?: ?string,
          structure_in?: ?$ReadOnlyArray<string>,
          structure_not_in?: ?$ReadOnlyArray<string>,
          structure_lt?: ?string,
          structure_lte?: ?string,
          structure_gt?: ?string,
          structure_gte?: ?string,
          structure_contains?: ?string,
          structure_not_contains?: ?string,
          structure_starts_with?: ?string,
          structure_not_starts_with?: ?string,
          structure_ends_with?: ?string,
          structure_not_ends_with?: ?string,
          termOfLease?: ?string,
          termOfLease_not?: ?string,
          termOfLease_in?: ?$ReadOnlyArray<string>,
          termOfLease_not_in?: ?$ReadOnlyArray<string>,
          termOfLease_lt?: ?string,
          termOfLease_lte?: ?string,
          termOfLease_gt?: ?string,
          termOfLease_gte?: ?string,
          termOfLease_contains?: ?string,
          termOfLease_not_contains?: ?string,
          termOfLease_starts_with?: ?string,
          termOfLease_not_starts_with?: ?string,
          termOfLease_ends_with?: ?string,
          termOfLease_not_ends_with?: ?string,
          updatedAt?: ?any,
          updatedAt_not?: ?any,
          updatedAt_in?: ?$ReadOnlyArray<any>,
          updatedAt_not_in?: ?$ReadOnlyArray<any>,
          updatedAt_lt?: ?any,
          updatedAt_lte?: ?any,
          updatedAt_gt?: ?any,
          updatedAt_gte?: ?any,
          website?: ?string,
          website_not?: ?string,
          website_in?: ?$ReadOnlyArray<string>,
          website_not_in?: ?$ReadOnlyArray<string>,
          website_lt?: ?string,
          website_lte?: ?string,
          website_gt?: ?string,
          website_gte?: ?string,
          website_contains?: ?string,
          website_not_contains?: ?string,
          website_starts_with?: ?string,
          website_not_starts_with?: ?string,
          website_ends_with?: ?string,
          website_not_ends_with?: ?string,
          whySelling?: ?string,
          whySelling_not?: ?string,
          whySelling_in?: ?$ReadOnlyArray<string>,
          whySelling_not_in?: ?$ReadOnlyArray<string>,
          whySelling_lt?: ?string,
          whySelling_lte?: ?string,
          whySelling_gt?: ?string,
          whySelling_gte?: ?string,
          whySelling_contains?: ?string,
          whySelling_not_contains?: ?string,
          whySelling_starts_with?: ?string,
          whySelling_not_starts_with?: ?string,
          whySelling_ends_with?: ?string,
          whySelling_not_ends_with?: ?string,
          zipCode?: ?string,
          zipCode_not?: ?string,
          zipCode_in?: ?$ReadOnlyArray<string>,
          zipCode_not_in?: ?$ReadOnlyArray<string>,
          zipCode_lt?: ?string,
          zipCode_lte?: ?string,
          zipCode_gt?: ?string,
          zipCode_gte?: ?string,
          zipCode_contains?: ?string,
          zipCode_not_contains?: ?string,
          zipCode_starts_with?: ?string,
          zipCode_not_starts_with?: ?string,
          zipCode_ends_with?: ?string,
          zipCode_not_ends_with?: ?string,
          postedBy?: any,
        },
        assets_some?: any,
        assets_none?: any,
        messages_every?: ?{
          AND?: $ReadOnlyArray<any>,
          OR?: $ReadOnlyArray<any>,
          id?: ?string,
          id_not?: ?string,
          id_in?: ?$ReadOnlyArray<string>,
          id_not_in?: ?$ReadOnlyArray<string>,
          id_lt?: ?string,
          id_lte?: ?string,
          id_gt?: ?string,
          id_gte?: ?string,
          id_contains?: ?string,
          id_not_contains?: ?string,
          id_starts_with?: ?string,
          id_not_starts_with?: ?string,
          id_ends_with?: ?string,
          id_not_ends_with?: ?string,
          text?: ?string,
          text_not?: ?string,
          text_in?: ?$ReadOnlyArray<string>,
          text_not_in?: ?$ReadOnlyArray<string>,
          text_lt?: ?string,
          text_lte?: ?string,
          text_gt?: ?string,
          text_gte?: ?string,
          text_contains?: ?string,
          text_not_contains?: ?string,
          text_starts_with?: ?string,
          text_not_starts_with?: ?string,
          text_ends_with?: ?string,
          text_not_ends_with?: ?string,
          from?: any,
          to?: any,
        },
        messages_some?: any,
        messages_none?: any,
        sent_every?: any,
        sent_some?: any,
        sent_none?: any,
      },
      to?: any,
    },
  },
|};
export type NewMessageSubscriptionResponse = {|
  +Message: ?{|
    +mutation: _ModelMutationType,
    +node: ?{|
      +id: string,
      +text: string,
      +from: ?{|
        +id: string,
      |},
      +to: ?{|
        +id: string,
      |},
    |},
  |},
|};
*/


/*
subscription NewMessageSubscription(
  $filter: MessageSubscriptionFilter!
) {
  Message(filter: $filter) {
    mutation
    node {
      id
      text
      from {
        id
      }
      to {
        id
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "MessageSubscriptionFilter!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "args": null,
  "name": "id",
  "storageKey": null
},
v2 = [
  v1
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter",
        "type": "MessageSubscriptionFilter"
      }
    ],
    "concreteType": "MessageSubscriptionPayload",
    "name": "Message",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "mutation",
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
          v1,
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
            "selections": v2,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "User",
            "name": "to",
            "plural": false,
            "selections": v2,
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
    "name": "NewMessageSubscription",
    "selections": v3,
    "type": "Subscription"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "NewMessageSubscription",
  "query": {
    "argumentDefinitions": v0,
    "kind": "Root",
    "name": "NewMessageSubscription",
    "operation": "subscription",
    "selections": v3
  },
  "text": "subscription NewMessageSubscription(\n  $filter: MessageSubscriptionFilter!\n) {\n  Message(filter: $filter) {\n    mutation\n    node {\n      id\n      text\n      from {\n        id\n      }\n      to {\n        id\n      }\n    }\n  }\n}\n"
};
})();

module.exports = batch;
