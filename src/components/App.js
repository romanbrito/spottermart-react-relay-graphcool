import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'
import '../sass/App.css' //reboot, similar to normalize.css
import 'typeface-roboto'
import {GC_USER_ID} from "../constants"; //roboto font
import {_userInfo} from '../utils'


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
    return (
      <div className="app">
        <div className="view-container">
          <div className="container-relative">
            <div className="hero-image">
              <Header removeUserName={this._removeUserName} userName={this.state.userName}/>
              <Main getUserName={this._getUserName}/>
            </div>
          </div>
        </div>
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
