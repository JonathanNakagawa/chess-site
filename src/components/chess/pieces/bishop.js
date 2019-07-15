import Piece from './piece.js';
import WhiteBishop from '../../../resources/piece_images/Bishop_White.png';
import BlackBishop from '../../../resources/piece_images/Bishop_Black.png';

export default class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1? WhiteBishop : BlackBishop));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        var diffX = Math.abs(srcX - destX);
        var diffY = Math.abs(srcY - destY);
        return(diffX === diffY);
    }
}
