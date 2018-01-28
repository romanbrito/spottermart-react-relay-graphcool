import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'
import Input, {InputLabel, InputAdornment} from 'material-ui/Input'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui-icons/Visibility'
import VisibilityOff from 'material-ui-icons/VisibilityOff'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import {createFragmentContainer, graphql} from "react-relay";


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {}
}

@withStyles(styles)
class Profile extends Component {
  state = {
    id: this.props.User.id,
    email: this.props.User.email,
    name: this.props.User.name
  }

  render() {
    const {classes} = this.props

    return (
      <div>
        <Input
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}
        />
        <Input
          placeholder="Your email address"
          value={this.state.email}
          onChange={(e) => this.setState({email: e.target.value})}
        />
        <Button
        color="primary"
        onClick={() => console.log(this.state)}
        >
          Update
        </Button>
      </div>

    )
  }

}

export default createFragmentContainer(Profile,
  {
    User: graphql`
        fragment Profile_User on User {
            id
            email
            name
        }
    `
  })