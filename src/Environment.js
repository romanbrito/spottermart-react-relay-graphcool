import { GC_AUTH_TOKEN } from './constants'
// 1
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

// 2
const store = new Store(new RecordSource())

// 3
export const fetchQuery = (operation, variables) => {
  // 4
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

const network = Network.create(fetchQuery)

// 5
const environment = new Environment({
  network,
  store,
})

// 6
export default environment