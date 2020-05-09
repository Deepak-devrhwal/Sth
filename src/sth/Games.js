import React, { Component } from "react";
import { Link } from "react-router-dom";

class Games extends Component {
  render() {
    return (
      <main>
        <h1>One Piece Games</h1>
        <div className='gameGallery1'>
          <Link className='game1' to='/Memory' />
        </div>
      </main>
    );
  }
}

export default Games;
