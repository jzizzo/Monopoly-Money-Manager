import React, { Component } from 'react';
import Player from '../player/Player.jsx'


class Manager extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>This is where the manager will go

        <Player />
        <Player />
        <Player />
      </div>
    )
  }
}

export default Manager;