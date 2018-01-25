import {
  graphql,
  requestSubscription
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import environment from '../Environment'

const newMessageSubscription = graphql`
    subscription NewMessageSubscription  {
        #1 root field of the subscription and the 
        #belonging filter express the event interested in
        Message {
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
    variables: {},
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