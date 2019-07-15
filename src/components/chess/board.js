import React from 'react';
import Tile from './tile.js';
import '../index.css';


export class Board extends React.Component {
    renderTile(coorX, coorY, tileShade){
        return(<Tile 
          piece = {this.props.pieces[coorX][coorY]}
          style = {this.props.pieces[coorX][coorY]? this.props.pieces[coorX][coorY].style : null}
          shade = {tileShade}
          onClick = {() => this.props.onClick(coorX, coorY)}
        /> );
    }

    render(){
      const board = [];
      for(let y = 7; y >= 0; y--){
        for(let x = 0; x < 8; x++){
          const tileShade = ((isEven(x) && isEven(y)) || (!isEven(x) && !isEven(y)))? 'dark-square' : 'light-square';
          const tile = this.renderTile(x, y, tileShade)
          board.push(<div> {tile} </div>)
        }
      }

      return(
        <div className = "container">
          {board}
        </div>
      );
    }
}

function isEven(i){
  return i % 2 === 0;
}
