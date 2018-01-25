import { GC_AUTH_TOKEN } from './constants'
// 1 import the required JS modules to instantiate and configure the Environment
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

// 2 Instantiate the required Store that will store the cached data
const store = new Store(new RecordSource())

// 3 Create a Network that knows your GraphQL server from before, it's instantiated with a function
// that returns a Promise of a networking call to the GraphQL API
export const fetchQuery = (operation, variables) => {
  // 4 The Network needs to know the server endpoint for your API
  return fetch('https://api.graph.cool/relay/v1/cjc2sxbbi0r6l0117xjitrpuu', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

// 7 Define the second function called setupSubcription that the Network needs in order
// to be able to talk to the subscriptions endpoint.  SubscriptionClient is used to initiate
// and maintain a connection to the given endpoint.
const network = Network.create(fetchQuery)

// 5 With the store and network available you can instantiate the actual Environment
const environment = new Environment({
  network,
  store,
})

// 6 Export the environment from this module
export default environment