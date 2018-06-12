import { Board } from './board/board';
import { Player } from './player';
import { GameService } from './game.service';

export class Game {
    board: Board;
    players: Player[];
    whoIsPlaying: Player;

    constructor( private gameService: GameService) {
     this.startNewGame();
    }

    startNewGame() {
      this.board = this.gameService.getBoard();
      this.players = [new Player('Giuliane', 'X'), new Player('Junior', 'O')];
      this.whoIsPlaying = this.gameService.getFirstPlayer(this.players);
    }
}
