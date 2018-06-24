import { Injectable } from '@angular/core';
import { Game } from './game';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from './player';
import { Row } from '../board/row';
import { Value } from '../square/value.enum';
import { Square } from '../square/square';
import { Position } from '../square/position.enum';
import { Board } from '../board/board';
import { ResultService } from './result.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private players: Player[] = [Player.getNewPlayer('Giuliane', Value.oValue), Player.getNewPlayer('Junior', Value.xValue)];

  private game: BehaviorSubject<Game> = new BehaviorSubject(this.getNewGame());
  private player:  BehaviorSubject<Player> = new BehaviorSubject(this.game.getValue().whoIsPlaying);

  currentGame = this.game.asObservable();
  currentPlayer = this.player.asObservable();

  constructor(private resultService: ResultService) {

  }

  getNewGame(): Game {
   return new Game(this.players, this.getFirstPlayer());
  }

  getFirstPlayer() {
    const player: Player = this.players[Math.floor(Math.random() * this.players.length)];
    return player ;
  }

  changeSquareValueBasedOnPlayer(square: Square): void {
    this.currentGame.subscribe(x =>
      this.getSquare(this
        .getRow(x.board.rows, square.id), square.id).value = x.whoIsPlaying.value);

    this.verifyResult(this.game.getValue().board);
    this.changeToNextPlayer();
  }

  getRow(rows: Row[], squareId:string): Row {
    return rows.find(r => r.squares.some(x => x.id === squareId));
  }

  getSquare(row: Row, squareId: string): Square {
    return row.squares.find(s => s.id === squareId);
  }

  changeToNextPlayer() {
    this.currentGame.subscribe(c => c.whoIsPlaying = this.getNextPlayer(c.players, c.whoIsPlaying));
  }

  getNextPlayer(players, currentPlayer): Player {
    const player = players.find(p => p !== currentPlayer);
    return player;
  }

  verifyResult(board: Board) {
      const result = this.resultService.with(board).run();
     if (result.hasWinner) {
        this.markWinnerCel(result.winnerSquares);
     }
  }

  markWinnerCel(winners: Square[]) {
    this.currentGame.subscribe(v => {
      winners.forEach(s => {
        this.currentGame.subscribe(c => this.getSquare(this.getRow(c.board.rows, s.id), s.id).winner = 'winner');
      });
    });
  }
}
