import React, { Component } from 'react'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'
import Message from './Message'
import NewMessageSubscription from '../subscriptions/NewMessageSubscription'

class MessageList extends Component {

  componentDidMount() {
    NewMessageSubscription(
      response => {
        console.log(`Received data: `, response)
      },
      error => console.log(`An error occurred:`, error),
      () => console.log(`Completed`),
      store => console.log(store.getRoot())
    )
  }

  render() {

    return (
      <div>
        {this.props.viewer.allMessages.edges
          .filter(({node}) => node !== null)
          .map(({node}) => (
          <Message key={node.__id} message={node} />
        ))}
      </div>
    )
  }
}

export default createFragmentContainer(MessageList,
  {
    viewer: graphql`
      fragment MessageList_viewer on Viewer {
          allMessages(
              filter: $filter,
              last: 100,
              orderBy: id_ASC
          ) @connection(key: "MessageList_allMessages") {
              edges {
                  node {
                      ...Message_message
                  }
              }
          }
      }
    `
  })