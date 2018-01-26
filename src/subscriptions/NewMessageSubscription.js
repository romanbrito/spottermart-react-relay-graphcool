import {
  graphql,
  requestSubscription
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import environment from '../Environment'
import {GC_USER_ID} from "../constants"

const newMessageSubscription = graphql`
    subscription NewMessageSubscription ($filter: MessageSubscriptionFilter!)  {
        #1 root field of the subscription and the 
        #belonging filter express the event interested in
        Message(filter: $filter) {
            mutation
            #2 payload of the subscription
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
`

// 3 exporting the function so it can be used anywhere
// in the application and which submits the subscription
// by wrapping the requestSubscription
export default (onNext, onError, onCompleted, updater) => {

  const subscriptionConfig = {
    subscription: newMessageSubscription,
    variables: {
      filter: {
        node: {to: {id: localStorage.getItem(GC_USER_ID)}}
      }
    },
    onError,
    onNext,
    onCompleted,
    updater,
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )
}