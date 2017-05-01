import React, { Component } from 'react';
import Player from '../player/Player.jsx'

class Manager extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <br />
        <br />
        { this.props.data.map((playerData, key) => {
          return <Player player={playerData} players={this.props.data} key={key} updateData={this.props.updateData}/>
        })
      }
      </div>
    )
  }
}

export default Manager;