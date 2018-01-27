import React, { Component } from 'react'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import Message from './Message'
import NewMessageSubscription from '../subscriptions/NewMessageSubscription'
import {GC_USER_ID} from "../constants"

class MessageList extends Component {

  componentDidMount() {
    const userId = localStorage.getItem(GC_USER_ID)

    NewMessageSubscription(
      response => {
        console.log(`Received data: `, response)
      },
      error => console.log(`An error occurred:`, error),
      () => console.log(`Completed`),
      store => {
        // const userProxy = store.get(userId)
        //
        // const conn = ConnectionHandler.getConnection(
        //   userProxy,
        //   'MessageList_sent'
        // )
        // console.log(conn)
        const messageProxy = store.getRoot()
        const messages = messageProxy.getLinkedRecord('viewer')
        console.log(messages)
        const conn = ConnectionHandler.getConnection(
          messageProxy,
          'MessageList_sent'
        )
      }
    )
  }

  render() {
    return (
      <div>
        {this.props.viewer.User.sent.edges
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
          User(
              id: $userId
          ) {
              sent(
                  last: 100,
                  orderBy: id_ASC
              )@connection(key: "MessageList_sent") {
                  edges {
                      node {
                          ...Message_message
                      }
                  }
              }      
          }
      }
    `
  })