import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player.token,
      value: 'Transfer fund$',
      showTransferOptions: false
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

  toggleTransferOptions() {
    this.setState({showTransferOptions: !this.state.showTransferOptions})
  }

  displayTransferOptions() {
    return this.props.players.filter( (currentPlayer) => {
           if (this.state.player !== currentPlayer.token) {
            return currentPlayer}}
             )
          .map( (player, key) => { return <div onClick={this.someFnThatWillReturnInputForm}key={key}>{player.token}</div>})
  }

  render() {

    return (
      <div>
        <div onClick={ this.toggleTransferOptions.bind(this) }> Player: { this.props.player.token }
        </div>
          <div> Balance: ${ this.props.player.balance }
          { this.state.showTransferOptions ? this.displayTransferOptions() : null }
          </div>
          <br /> <br />
      </div>
    )
  }
}

export default Player;