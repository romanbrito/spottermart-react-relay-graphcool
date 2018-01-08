// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

// 2
const mutation = graphql`
    mutation CreateAssetMutation($input: CreateAssetInput!) {
        createAsset(input: $input) {
            asset {
                id
                createdAt
                businessName
                price
                postedBy {
                    id
                    name
                }
            }
        }
    }
`

// 3
export default (postedById, businessName, price, callback) => {
  //4
  const variables = {
    input: {
      postedById,
      businessName,
      price,
      clientMutationId: ""
    },
  }

  // 5
  commitMutation(
    environment,
    {
      mutation,
      variables,

      // 6
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
