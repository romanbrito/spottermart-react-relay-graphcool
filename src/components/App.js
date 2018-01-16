import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import 'typeface-roboto' //roboto font

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
