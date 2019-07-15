import Piece from './piece.js'
import WhiteQueen from '../../../resources/piece_images/Queen_White.png'
import BlackQueen from '../../../resources/piece_images/Queen_Black.png'

export default class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1? WhiteQueen : BlackQueen));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        var diffX = Math.abs(srcX - destX);
        var diffY = Math.abs(srcY - destY);
        var eqX = srcX === destX;
        var eqY = srcY === destY;
        return(((eqX || eqY) && !(eqX && eqY)) || (diffX === diffY));
    }
}
