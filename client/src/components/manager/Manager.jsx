import React, { Component } from 'react';
import Bank from '../player/Bank.jsx'
import Player from '../player/Player.jsx'


class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div>This is where the manager will go

        <br />
        <br />

        { this.props.data.map((playerData, key) => {
          return <Player player={playerData} players={this.props.data} key={key} />
        })
      }
      </div>
    )
  }
}

export default Manager;