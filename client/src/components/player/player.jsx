import React, { Component } from 'react';
import $ from 'jquery'


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player.token,
      value: 0,
      showTransferOptions: false,
      showTransferForm: false,
      transferTo: undefined,
      transferAmount: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value);
  }

  sendRequest (transferObj) {
    console.log('clicky')
    $.ajax({
      type: 'PUT',
      url: 'http://127.0.0.1:1935/transfer',
      data: transferObj,
      success: (results) => { console.log(results); this.props.updateData(results) },
      error: (err) => { console.log('ajax request to /transfer failed', err)}
    })
  }

  handleSubmit() {

  }

  handleKeyPress(e) {
    if(e.charCode == 13) {
      this.sendRequest();
      console.log('hiiii')
      alert(`Success! You sent ${this.state.value} to ${this.state.transferTo}`)
      this.setState({showTransferOptions: false,
      showTransferForm: false,
      transferTo: undefined})

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
    return <input type="text" placeholder={`Transfer to ${this.state.transferTo}`} onChange={this.handleChange} onKeyPress={ (e) => this.handleKeyPress(e) } />

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