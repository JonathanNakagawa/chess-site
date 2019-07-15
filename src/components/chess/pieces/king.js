import Piece from './piece.js'
import WhiteKing from '../images/King_White.png'
import BlackKing from '../images/King_Black.png'

export default class King extends Piece {
    constructor(player) {
        super(player, (player === 1? WhiteKing : BlackKing));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        var diffX = Math.abs(srcX - destX);
        var diffY = Math.abs(srcY - destY);
        return(diffX <= 1 && diffY <= 1);
    }
}
