import React, {Component} from 'react'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import storeDebugger from 'relay-runtime/lib/RelayStoreProxyDebugger'
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
        storeDebugger.dump(store)
        // Get the new Message
        const rootField = store.getRootField('Message')
        const message = rootField.getLinkedRecord('node');
        // Add it to a connection
        const user = store.get(userId)
        const conn = ConnectionHandler.getConnection(
          user,
          'MessageList_sent',
          {orderBy: 'id_ASC'}
        )
        const edge = ConnectionHandler.createEdge(
          store,
          conn,
          message,
          'UserEdge',
        )
        // No cursor provided, append the edge at the end.
        ConnectionHandler.insertEdgeAfter(conn, edge)
        //client:cjc5ivrys4qa20156p52u859c:__MessageList_sent_connection{"orderBy":"id_ASC"}:edges:0
        //console.log(message)
        //console.log(edge)
      }
    )
  }

  render() {
    return (
      <div>
        {this.props.User.sent.edges
          .filter(({node}) => node !== null)
          .map(({node}) => (
            <Message key={node.__id} message={node}/>
          ))}
      </div>
    )
  }
}

export default createFragmentContainer(MessageList,
  {
    User: graphql`
        fragment MessageList_User on User {
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
    `
  })