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
                description
                city
                state
                zipCode
            }
        }
    }
`

// 3
export default (postedById, businessName, price,description,
  city,
  state,
  zipCode, callback) => {
  //4
  const variables = {
    input: {
      postedById,
      businessName,
      price,
      description,
      city,
      state,
      zipCode,
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
