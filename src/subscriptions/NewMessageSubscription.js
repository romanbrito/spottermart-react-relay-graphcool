import {
  graphql,
  requestSubscription
} from 'react-relay'
import environment from '../Environment'

const newMessageSubscription = graphql`
    subscription NewMessaageSubscription {
        #1 root field of the subscription and the 
        #belonging filter express the event interested in
        Message {
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
export default () => {

  const subscriptionConfig = {
    subscription: newMessageSubscription,
    variables: {},
    updater: proxyStore => {
      //
    },
    onError: error => console.log('An error occurred' + error)
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )
}