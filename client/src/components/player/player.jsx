import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Transfer fund$',
      transfer: undefined,
      showBalance: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleKeyPress(e) {
    if(event.charCode == 13) {
      console.log('hiiii')
    }
  }

  displayTransfers(player) {
    console.log(player, this.props.players.filter( (currentPlayer) => { if (player !== currentPlayer.token) { return currentPlayer }} ))
  }

  render() {
    {console.log}

    return (
      <div>
        <div onClick={() => (this.displayTransfers(this.props.player.token))}> Player: {this.props.player.token}
        </div>
          <div> Balance: ${this.props.player.balance} <br />
        </div>

      </div>
    )
  }
}

export default Player;