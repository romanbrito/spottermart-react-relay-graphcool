import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'
import 'typeface-roboto' //roboto font
import {withStyles} from 'material-ui/styles'
import {GC_USER_ID} from "../constants";
import {_userInfo} from '../utils'
import Footer from './Footer'

const styles = {
  content: {
    flex:"1 0 auto"
  }
}

class App extends Component {

  state = {
    userName: ''
  }

  userId = localStorage.getItem(GC_USER_ID)

  componentDidMount() {
    if (this.userId) {
      this._getUserName(this.userId)
    }
  }

  render() {
    const {classes} = this.props
    return (
      <div className="app">
        <div className="content">
          <Header removeUserName={this._removeUserName} userName={this.state.userName}/>
          <Main getUserName={this._getUserName}/>
        </div>
        <Footer/>
      </div>
    );
  }

  _getUserName = (userId) => {

    _userInfo(userId).then(
      result => this.setState({userName: result.data.viewer.User.name})
    )

  }

  _removeUserName = () => {
    this.setState({userName: ''})
  }
}

export default withStyles(styles)(App);
