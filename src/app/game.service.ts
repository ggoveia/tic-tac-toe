import { Injectable } from '@angular/core';
import { Game } from './game';
import { Row } from './board/row';
import { Square } from './square/square';
import { Value } from './square/value.enum';
import { Position } from './square/position.enum';
import { Board } from './board/board';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private game: BehaviorSubject<Game> = new BehaviorSubject(new Game(this));

  currentGame = this.game.asObservable();

  getFirstPlayer(players) {
    return players[Math.floor(Math.random() * players.length)];
  }

  getBoard() {
    const rowList = new Array(new Row('first', new Square('f1', Value.noValue, Position.left),
      new Square('f2', Value.noValue, Position.center),
      new Square('f3', Value.noValue, Position.right)),
      new Row('second', new Square('s1', Value.noValue, Position.left),
        new Square('s2', Value.noValue, Position.center),
        new Square('s3', Value.noValue, Position.right)),
      new Row('third', new Square('t1', Value.noValue, Position.left),
        new Square('t2', Value.noValue, Position.center),
        new Square('t3', Value.noValue, Position.right)));

    return new Board(rowList);

  }

  changeSquareValueBasedOnPlayer(square: Square): void {

    this.currentGame.subscribe(x =>
      this.getSquare(this
        .getRow(x.board.rows, square.id), square.id).value = x.whoIsPlaying.value);

    this.changeToNextPlayer();
    this.verifyResult(square);
  }

  getRow(rows, squareId): Row {
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

  verifyResult(square: Square) {

  }

  verifyVerticalResult(board: Board) {
    const squareArray = [];
  //  return this.haveSameValue(board.rows.forEach(r => squareArray.push(r.squares[0])));
  }

  confirmVerticalValues(board: Board){    
    for(let i = 0; i < 2; i++ ) {
      let rowVerticalValues = [] ;
      board.rows.forEach(
        r => {          
          rowVerticalValues.push(r.squares[i]);         
        }
      )
      if(this.haveSameValue(rowVerticalValues))
      {
         this.game.subscribe(g => g.board.rows.filter(r => r.squares[i].winner == "vertical"));
         return;
      }
    }
  }

  confirmHorizontalValues(board: Board){
    board.rows.forEach(
      r => {
        
      }
    )
  }

  haveSameValue(squareList: Array<Square>) {
    return squareList.every(s => s.value == Value.oValue) || squareList.every(s => s.value == Value.xValue);
  }

  diagonalHasSameValue(diagonalValues){
    return diagonalValues.every(s => s.value === Value.oValue) || diagonalValues.every(s => s.value === Value.xValue);
  }

  markRow(r: Row) {
    this.currentGame.subscribe(v => v.board.rows.find(x => x.id === r.id).risk = 'risk');
  }
  markWinnerCel(board, winners: Square[]) {
    this.currentGame.subscribe(v => {
      winners.forEach(s => {
        this.currentGame.subscribe(c => this.getSquare(this.getRow(c.board.rows, s.id), s.id).winner === 'winner');
      });
    });
  }

  constructor() {

  }
}
