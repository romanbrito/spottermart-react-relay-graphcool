import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'
import Input, {InputLabel, InputAdornment} from 'material-ui/Input'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui-icons/Visibility'
import VisibilityOff from 'material-ui-icons/VisibilityOff'
import Grid from 'material-ui/Grid'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import SigninUserMutation from '../mutations/SigninUserMutation'
import CreateUserMutation from '../mutations/CreateUserMutation'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  bg: {
    background: '#E3F2FD',
  },
  name: {
    marginRight: 15
  }
})

@withStyles(styles)
class Login extends Component {

  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
    showPassword: false,
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>

          <Grid item xs={1} sm={4}/>
          <Grid item xs={12} sm={4} className={classes.bg}>
            {!this.state.login &&
            <Input
              className={classes.name}
              placeholder="Your Name"
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
            />}
            <Input
              placeholder="Your email address"
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </Grid>
          <Grid item xs={1} sm={4}/>

          <Grid item xs={1} sm={4}/>
          <Grid item xs={12} sm={2} className={classes.bg}>
            <Input
              placeholder="Choose a safe password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.bg}>
            <Button
              color="primary"
              onClick={() => this._confirm()}>
              Login
            </Button>
            <Button
              color="primary"
              onClick={() => this.setState({login: !this.state.login})}
            >
              {this.state.login ? 'need to create an account?' : 'already have an account?'}
            </Button>
          </Grid>
          <Grid item xs={1} sm={4}/>

        </Grid>
      </div>
    )
  }

  _confirm = () => {
    const {name, email, password} = this.state
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
    this.props.getUserName(id)
  }
}

export default Login