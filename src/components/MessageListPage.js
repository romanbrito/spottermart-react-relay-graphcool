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
      $filter: MessageFilter!
  ){
      viewer {
          ...MessageList_viewer
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
        filter: {to: {id:userId}}
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <MessageList viewer={props.viewer} history={this.props.history}/>
        }
        return <div>Loading</div>
      }}
      />
    )
  }
}

export default MessageListPage