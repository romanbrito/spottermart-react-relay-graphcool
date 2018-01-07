import React, { Component } from 'react'
// import logo from '../logo.svg';
// import '../App.css';
//import AssetList from './AssetList'
//import AssetListPage from './AssetListPage'
//import CreateAsset from './CreateAsset'
//import FormatedInputs from './Formated'
//import AppBar from './AppBarMenu'
import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
