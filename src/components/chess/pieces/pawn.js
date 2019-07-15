import Piece from './piece.js'
import WhitePawn from '../images/Pawn_White.png'
import BlackPawn from '../images/Pawn_Black.png'

export default class Pawn extends Piece {
    constructor(player) {
        super(player, (player === 1? WhitePawn : BlackPawn));
        this.inInitialPos = true;
    }

    isPossibleMove(srcX, srcY, destX, destY, destEnemyOccupied) {
        if(this.player === 1) {
            const ret = (((srcX === destX) && (srcY + 1 === destY)) || 
            (((srcX === destX) && (srcY + 2 === destY)) && this.inInitialPos) || 
            ((Math.abs(destX - srcX) === 1) && (srcY + 1 === destY) && destEnemyOccupied));
            this.inInitialPos = false;
            return ret;
        }
        else if (this.player === 2) {
            const ret = (((srcX === destX) && (srcY - 1 === destY)) || 
            (((srcX === destX) && (srcY - 2 === destY)) && this.inInitialPos) || 
            ((Math.abs(destX - srcX) === 1) && (srcY - 1 === destY) && destEnemyOccupied));
            this.inInitialPos = false;
            return ret;
        }
    }
}
