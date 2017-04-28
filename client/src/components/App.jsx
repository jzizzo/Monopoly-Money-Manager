import React, { Component } from 'react';
import Manager from './manager/Manager.jsx';
import Nav from './nav/Nav.jsx'

class App extends Component {
  constructor (props) {
    super (props)
  }

  render() {

    return (
      <div>
        <Nav />
        <Manager />
      </div>
    )
  }
}



export default App;