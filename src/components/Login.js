import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import SigninUserMutation from '../mutations/SigninUserMutation'
import CreateUserMutation from '../mutations/CreateUserMutation'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {

  }
}

@withStyles(styles)
class Login extends Component {

  state = {
    login: true, // switch between Login and SignUp
    email:'',
    password:'',
    name:''
  }

  render() {

    return(
      <div>
        {!this.state.login &&
        <Input
          placeholder="Your Name"
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}
        />}
        <Input
          placeholder="Your email address"
          value={this.state.email}
          onChange={(e) => this.setState({email: e.target.value})}
        />
        <Input
          placeholder="Choose a safe password"
          value={this.state.password}
          onChange={(e) => this.setState({password: e.target.value})}
        />
        <Button
          color="primary"
          onClick={() => this._confirm()}>
          Login
        </Button>
        <Button
          color="primary"
          onClick={() => this.setState({ login: !this.state.login })}
        >
          {this.state.login ? 'need to create an account?' : 'already have an account?'}
        </Button>
      </div>

    )
  }

  _confirm = () => {
    const { name, email, password } = this.state
    if (this.state.login) {
      SigninUserMutation(email, password, (id, token) => {
        this._saveUserData(id, token)
        this.props.history.push(`/`)
      })
    } else {
      CreateUserMutation(name, email, password, (id, token) => {
        this._saveUserData(id, token)
        this.props.history.push(`/`)
      })
    }
  }

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
  }
}

export default Login