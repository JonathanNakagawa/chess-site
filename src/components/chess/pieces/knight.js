import Piece from './piece.js'
import WhiteKnight from '../images/Knight_White.png'
import BlackKnight from '../images/Knight_Black.png'

export default class Knight extends Piece {
    constructor(player) {
        super(player, (player === 1? WhiteKnight : BlackKnight));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        var diffX = Math.abs(srcX - destX);
        var diffY = Math.abs(srcY - destY);
        return(((diffX === 1) && (diffY === 2)) || ((diffX === 2) && (diffY === 1)));
    }
}
