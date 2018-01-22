import React, { Component } from 'react'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'
import Message from './Message'

class MessageList extends Component {

  render() {

    return (
      <div>
        {this.props.viewer.allMessages.edges.map(({node}) => (
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