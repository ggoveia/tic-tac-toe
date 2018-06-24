import { Value } from './value.enum';
import { Position } from './position.enum';

export interface Square {
 id: string;
 value: Value;
 position: string;
 winner: string;
}

export class TicTacToeSquare implements Square {
  id: string;
  value: Value;
  position: string;
  winner: string;

   constructor(id, position) {
    this.id = id;
    this.value = Value.noValue;
    this.position = position;
  }

  static getNewSquare(id: string, position: Position) {
    return new TicTacToeSquare(id, position);
  }

}
