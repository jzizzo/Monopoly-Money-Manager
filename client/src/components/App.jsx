import React, { Component } from 'react';
import Manager from './manager/Manager.jsx';
import Nav from './nav/Nav.jsx'
import $ from 'jquery'

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: []
    }
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:1935/data',
      success: (results) => { this.setState({data: results}) },
      error: (err) => { console.log('crap')}
    })
  }

  updateData(newData) {
    this.setState({data: newData});
  }

  // when attaching server, replace data passed to Manager with an ajax call to server to return

  render() {

    return (
      <div>
        <Nav updateData={this.updateData}/>
        <Manager data={this.state.data} updateData={this.updateData} />
      </div>
    )
  }
}



export default App;