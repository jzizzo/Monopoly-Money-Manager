import React, { Component } from 'react';
import Bank from '../player/Bank.jsx'
import Player from '../player/Player.jsx'


class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ['hat', 'trex']
    }
  this.displayTransfer = this.displayTransfer.bind(this);
  }

  displayTransfer(player) {
    console.log('hiii', player);
  }


  render() {
    return (
      <div>This is where the manager will go

        <br />
        <br />


        <Player playerId='bank' displayTransfer={this.displayTransfer} />
        <Player playerId='hat' displayTransfer={this.displayTransfer} />
        <Player playerId='trex' displayTransfer={this.displayTransfer} />
      </div>
    )
  }
}

export default Manager;