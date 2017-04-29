import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Transfer fund$',
      balance: 1500
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
        <div onClick={() => (this.props.displayTransfer(this.props.playerId))}> Player: {this.props.playerId}
        </div>
          <button>hat</button>
          <button>trex</button>
          <input
          type="text"
          value={ this.state.value }
          onChange={ this.handleChange }
          onFocus={ () => this.setState({value: ''}) }
          onKeyPress={ (e) => this.handleKeyPress(e) }
          />
      </div>
    )
  }
}

export default Player;