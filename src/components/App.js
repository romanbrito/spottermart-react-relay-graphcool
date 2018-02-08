import React, {Component} from 'react'
import 'typeface-roboto' //roboto font
import {GC_USER_ID} from "../constants";
import {_userInfo} from '../utils'
import '../sass/App.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

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

export default App;
