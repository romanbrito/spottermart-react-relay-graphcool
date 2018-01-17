// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

// 2
const mutation = graphql`
    mutation DeleteAssetMutation($input: DeleteAssetInput!) {
        deleteAsset(input: $input) {
            asset {
                id
                businessName
            }
        }
    }
`

// 3
export default (id, callback) => {
  // 4
  const variables = {
    input: {
      id
    }
  }

  // 5
  commitMutation(
    environment,
    {mutation,
    variables,

    // 6
      onCompleted: () => {
      callback()
      },
      onError: err => console.error(err)
    }
  )

}
