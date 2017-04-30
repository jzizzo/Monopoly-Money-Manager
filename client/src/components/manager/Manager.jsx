import React, { Component } from 'react';
import Bank from '../player/Bank.jsx'
import Player from '../player/Player.jsx'


class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  this.displayBalance = this.displayBalance.bind(this);
  }

  displayBalance(player) {
    console.log('hiii', this.props.data, player);
  }


  render() {
    return (
      <div>This is where the manager will go

        <br />
        <br />


        <Player playerId='bank' displayBalance={this.displayBalance} />
        <Player playerId='hat' displayBalance={this.displayBalance} />
        <Player playerId='trex' displayBalance={this.displayBalance} />
      </div>
    )
  }
}

export default Manager;