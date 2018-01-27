import React, {Component} from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from "../Environment"
import {GC_USER_ID} from "../constants"
import MessageList from './MessageList'

const MessageListPageQuery = graphql`
  query MessageListPageQuery(
      $userId: ID!
  ){
      viewer {
          User(
              id: $userId
          ) {
              ...MessageList_User
          }
      }
  }
`

class MessageListPage extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <QueryRenderer
      environment={environment}
      query={MessageListPageQuery}
      variables={{
        userId: userId
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <MessageList User={props.viewer.User} history={this.props.history}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}

export default MessageListPage