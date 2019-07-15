import React from 'react'
import initializeBoard from './helper/board_init_standard';
import { Board } from './board.js';
 

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            pieces: initializeBoard(),
            whiteLostPieces: [],
            blackLostPieces: [],
            player: 1,

        }
    }

    handleClick() {

    }

    render() {
        return(<Board pieces = {this.state.pieces} />);
    }
}

export default Game;