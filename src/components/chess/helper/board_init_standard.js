import King from '../pieces/king';
import Queen from '../pieces/queen';
import Rook from '../pieces/rook';
import Bishop from '../pieces/bishop';
import Knight from '../pieces/knight';
import Pawn from '../pieces/pawn';

// The initializeBoard function constructs and returns a nested array containing the initial positions of the chess pieces, represented by objects.
// The elements of the outer array are arrays representing columns. The elements of those arrays are objects inheriting from the Piece class.
// The function is exported.

export default function initializeBoard() {
    const cols = Array(8).fill(null);
    for(let i = 0; i < 8; i++) {
      cols[i] = Array(8).fill(null);
    }
  
    for(let i = 0; i < 8; i++){
      cols[i][1] = new Pawn(1);
      cols[i][6] = new Pawn(2);
    }
  
    cols[0][0] = new Rook(1);
    cols[0][7] = new Rook(2);
    cols[7][0] = new Rook(1);
    cols[7][7] = new Rook(2);
  
    cols[1][0] = new Knight(1);
    cols[6][0] = new Knight(1);
    cols[1][7] = new Knight(2);
    cols[6][7] = new Knight(2);
  
    cols[2][0] = new Bishop(1);
    cols[5][0] = new Bishop(1);
    cols[2][7] = new Bishop(2);
    cols[5][7] = new Bishop(2);
  
    cols[3][0] = new Queen(1);
    cols[3][7] = new Queen(2);
  
    cols[4][0] = new King(1);
    cols[4][7] = new King(2);
  
    return cols;
  }
  