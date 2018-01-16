import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'
import '../sass/App.css' //reboot, similar to normalize.css
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
