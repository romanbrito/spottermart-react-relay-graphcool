// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

// 2
const mutation = graphql`
    mutation UpdateAssetMutation($input: UpdateAssetInput!) {
        updateAsset(input: $input) {
            asset {
                id
            }
        }        
    }
`

// 3
// same arguments as CreateAssetMutation
export default (id,
  businessName,
  price,
  description,
  city,
  state,
  zipCode,
  pictures,
  callback) => {

  // 4
  const variables = {
    input: {
      //postedById,
      id,
      businessName,
      price,
      description,
      city,
      state,
      zipCode,
      pictures,
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
      onError: err => console.error(err)
    }
  )

}