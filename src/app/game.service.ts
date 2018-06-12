import { Injectable } from '@angular/core';
import { Game } from './game';
import { Row } from './board/row';
import { Square } from './square/square';
import { Value } from './square/value.enum';
import { Position } from './square/position.enum';
import { Board } from './board/board';

@Injectable({
  providedIn: 'root'
})

export class GameService {

   getFirstPlayer(players) {
    return players[Math.floor(Math.random() * players.length)];
   }

   getBoard() {
    const rowList = new Array(new Row('first', new Square( Value.noValue, Position.left),
                                            new Square( Value.noValue, Position.center),
                                            new Square( Value.noValue, Position.right)),
                            new Row('second', new Square( Value.noValue, Position.left),
                                              new Square(Value.noValue, Position.center),
                                              new Square(Value.noValue, Position.right)),
                            new Row('third', new Square( Value.noValue, Position.left),
                                            new Square( Value.noValue, Position.center),
                                            new Square( Value.noValue, Position.right)));
    return new Board(rowList);
  }

  constructor() {

  }
}
