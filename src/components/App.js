import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'
import '../sass/App.css' //reboot, similar to normalize.css
import 'typeface-roboto'
import {GC_USER_ID} from "../constants"; //roboto font
import {_userInfo} from '../utils'


class App extends Component {

  state = {
    userName:''
  }

  userId = localStorage.getItem(GC_USER_ID)

  componentDidMount() {
    this._getUserName()
  }

  render() {
    return (
      <div>
        <Header removeUserName={this._removeUserName}/>
        <Main/>
      </div>
    );
  }

  _getUserName = () => {
    if (this.userId) {
      _userInfo(this.userId).then(
        result => this.setState({userName:result.data.viewer.User.name})
      )
    }
  }

  _removeUserName = () => {
    this.setState({userName:''})
  }
}

export default App;
