
import { Player } from './player';
import { Board, TicTacToeBoard } from '../board/board';
import { Value } from '../square/value.enum';

export class Game {
    board: Board;
    players: Player[];
    whoIsPlaying: Player;

    constructor(players: Player[], player: Player) {
     this.board = this.getBoard();
     this.players = players;
     this.whoIsPlaying = player;
    }

    getCurrentPlayer() {
      return this.whoIsPlaying;
    }

    getBoard() {
      return TicTacToeBoard.getNewBoard();
    }
}
