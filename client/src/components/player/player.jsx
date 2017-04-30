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

  render() {

    return (
      <div>
        <div onClick={() => (this.props.displayBalance(this.props.playerId))}> Player: {this.props.player.id} Balance: ${this.props.player.balance} <br />
        </div>

      </div>
    )
  }
}

export default Player;