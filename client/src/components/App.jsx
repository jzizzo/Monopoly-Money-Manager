import React, { Component } from 'react';
import Manager from './manager/Manager.jsx';
import Nav from './nav/Nav.jsx'

class App extends Component {
  constructor (props) {
    super (props)
  }

  // when attaching server, replace data passed to Manager with an ajax call to server to return

  render() {

    return (
      <div>
        <Nav />
        <Manager data={this.props.data}/>
      </div>
    )
  }
}



export default App;