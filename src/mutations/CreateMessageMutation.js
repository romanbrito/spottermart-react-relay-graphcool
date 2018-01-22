import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation CreateMessageMutation($input: CreateMessageInput!) {
        createMessage(input: $input) {
            message {
                id
            }
        }
    }
`

export default (text,
                fromId,
                toId,
                callback) => {

  const variables = {
    input: {
      text,
      fromId,
      toId,
      clientMutationId: ""
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,

      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err)
    }
  )
}