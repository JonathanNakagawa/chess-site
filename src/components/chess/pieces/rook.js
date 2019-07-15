import Piece from './piece.js'
import WhiteRook from '../../../resources/piece_images/Rook_White.png'
import BlackRook from '../../../resources/piece_images/Rook_Black.png'

export default class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1? WhiteRook : BlackRook));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        var eqX = srcX === destX;
        var eqY = srcY === destY;
        return((eqX || eqY) && !(eqX && eqY));
    }
}
