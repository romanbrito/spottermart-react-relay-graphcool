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
    backgroundColor: '#fafafa',
    padding: '12px 0 12px 0'
  },
  input: {
    margin: 15
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
        <Grid spacing={0} container>

          <Grid item md={4}/>
          <Grid item xs={12} sm={12} md={4} className={classes.bg}>
            {!this.state.login &&
            <Input
              className={classes.input}
              placeholder="Your Name"
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
            />}
            <Input
              className={classes.input}
              placeholder="Your email address"
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </Grid>
          <Grid item xs={1} sm={4} md={4}/>

          <Grid item md={4}/>
          <Grid item xs={12} sm={12} md={2}className={classes.bg}>
            <Input
              className={classes.input}
              placeholder="Password"
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
          <Grid item xs={12} sm={12} md={2}className={classes.bg}>
            <Button
              className={classes.input}
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
          <Grid item md={4}/>

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