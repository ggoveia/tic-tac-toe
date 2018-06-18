import { Board } from './board/board';
import { Player } from './player';
import { GameService } from './game.service';
import { Value } from './square/value.enum';

export class Game {
    board: Board;
    players: Player[];
    whoIsPlaying: Player;

    constructor( private gameService: GameService) {
     this.startNewGame();
    }

    startNewGame() {
      this.board = this.gameService.getBoard();
      this.players = [new Player('Giuliane', Value.xValue), new Player('Junior', Value.oValue)];
      this.whoIsPlaying = this.gameService.getFirstPlayer(this.players);
    }

    getCurrentPlayer() {
      return this.whoIsPlaying;
    }
}
