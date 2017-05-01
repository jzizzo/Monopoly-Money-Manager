import React, { Component } from 'react';
import $ from 'jquery'


class Nav extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('clicky')
    $.ajax({
      type: 'PUT',
      url: 'http://127.0.0.1:1935/transfer',
      data: {trex: 1000, hat: 2000},
      success: (results) => { console.log(results); this.props.updateData(results) },
      error: (err) => { console.log('ajax request to /transfer failed', err)}
    })
  }

  render() {

    return (
      <div>
      <h1>Monopoloy Money Manager!</h1>
      <button onClick={this.handleClick}><h2>test transfer</h2></button>
      </div>
    )
  }
}

export default Nav;