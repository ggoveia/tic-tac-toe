import { Square, TicTacToeSquare } from '../square/square';
import { Position } from '../square/position.enum';

export interface Row {
   id: string;
   squares: Square[];
}

export class TicTacToeRow implements Row {
  id: string;
  squares: Square[];

  constructor(id: string) {
    this.id = id;
    this.squares = this.getSquares();
  }

  static getNewRow(id: string): Row {
   return new TicTacToeRow(id);
  }

  getSquares(): Square[] {
    const firstSquare: Square = TicTacToeSquare.getNewSquare( this.id + '1', Position.left);
    const second: Square = TicTacToeSquare.getNewSquare(this.id + '2', Position.center);
    const third: Square = TicTacToeSquare.getNewSquare(this.id + '3', Position.right);

    return [firstSquare, second, third ];
  }
}
