import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div onClick={() => (this.props.displayTransfer(this.props.playerId))}> Player: {this.props.playerId} </div>
    )
  }
}

export default Player;