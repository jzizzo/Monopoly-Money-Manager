import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player.token,
      value: '',
      showTransferOptions: false,
      showTransferForm: false,
      transferTo: undefined
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value);
  }

  handleSubmit() {

  }

  handleKeyPress(e) {
    if(event.charCode == 13) {
      console.log('hiiii')
    }
  }

  toggleTransferOptions() {
    this.setState({showTransferOptions: !this.state.showTransferOptions, showTransferForm: false})
  }

  displayTransferOptions() {
    return this.props.players.filter( (currentPlayer) => {
           if (this.state.player !== currentPlayer.token) {
            return currentPlayer}}
             )
          .map( (player, key) => { return <button onClick={() => (this.toggleTransferForm(player))}key={key}>{player.token}</button>})
  }

  toggleTransferForm(player) {
    this.setState({showTransferForm: !this.state.showTransferForm, transferTo: player.token})
  }

  displayTransferForm(player) {
    console.log(this.state.transferTo)
    return <input type="text" placeholder={`Transfer to ${this.state.transferTo}`} onChange={this.handleChange}/>

  }

  render() {

    return (
      <div>
        <div onClick={ this.toggleTransferOptions.bind(this) }> Player: { this.props.player.token }
        </div>
          <div> Balance: ${ this.props.player.balance }
          <br />
          { this.state.showTransferOptions && this.displayTransferOptions() }
          { this.state.showTransferForm &&  this.displayTransferForm()}
          </div>
          <br /> <br />
      </div>
    )
  }
}

export default Player;