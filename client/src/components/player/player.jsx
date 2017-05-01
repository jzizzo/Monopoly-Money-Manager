import React, { Component } from 'react';
import $ from 'jquery';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player.token,
      showTransferOptions: false,
      showTransferForm: false,
      transferTo: undefined,
      transferAmount: 0,
      transferToObj: undefined
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({transferAmount: event.target.value})
    console.log(this.state.transferAmount);
  }

  sendRequest (dataObj) {
    console.log('clicky')
    $.ajax({
      type: 'PUT',
      url: 'http://127.0.0.1:1935/transfer',
      data: dataObj,
      success: (results) => { console.log(results); this.props.updateData(results) },
      error: (err) => { console.log('ajax request to /transfer failed', err)}
    })
  }


  handleSubmit() {

  }

  handleKeyPress(e) {
    if(e.charCode == 13) {
      console.log('state:', this.state, 'props:', this.props)
      this.sendRequest({[this.state.player]: Number(this.props.player.balance) - Number(this.state.transferAmount), [this.state.transferTo]: Number(this.state.transferToObj.balance) + Number(this.state.transferAmount)});
      console.log('hiiii')
      alert(`Success! You sent ${this.state.transferAmount} to ${this.state.transferTo}`)
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
    console.log(player)
    this.setState({showTransferForm: !this.state.showTransferForm, transferTo: player.token, transferToObj: player})

  }

  displayTransferForm(player) {
    return <input type="text" placeholder={`Transfer to ${this.state.transferTo}`} onChange={this.handleChange} onKeyPress={ (e) => this.handleKeyPress(e) } />

  }

  pink () {
    console.log(this.state)
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


    // console.log('----###--', {[this.props.player.token]: this.props.player.balance - this.state.transferAmount, [this.state.transferTo]: this.state.transferToObj.balance + this.state.transferAmount
    // })
    // console.log('fuckkkllkkkkkkmylife', , this.state.transferToObj.balance + this.state.transferAmounmt)