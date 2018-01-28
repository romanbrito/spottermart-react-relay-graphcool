import React, {Component} from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from "../Environment"
import {GC_USER_ID} from "../constants"
import Profile from './Profile'

const ProfilePageQuery = graphql`
  query ProfilePageQuery(
      $userId: ID!
  ) {
      viewer {
          User(
              id: $userId
          ) {
             ...Profile_User
          }
      }
  }
`

class ProfilePage extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    return (
      <QueryRenderer
        environment={environment}
        query={ProfilePageQuery}
        variables={{
          userId: userId
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <Profile User={props.viewer.User} history={this.props.history}/>
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default ProfilePage