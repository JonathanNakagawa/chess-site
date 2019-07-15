import React from 'react';
import './chess.css';

// The Tile component represents an individual tile of the chess board. 
// It accepts a shade, onClick function, and style (containing the path to the piece occupying the tile).
// Exports Tile component.

export default function Tile(props) {
    return(
        <button 
            className={"tile " + props.shade}
            onClick={props.onClick}
            style = {props.style}
        >
        </button>
    );
}