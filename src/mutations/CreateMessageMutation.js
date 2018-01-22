import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
      createMessage(input: $input) {
          message {
              id
              text
              to {
                  id
                  name
              }
              from {
                  id
                  name
              }
          }
      }
  }
`