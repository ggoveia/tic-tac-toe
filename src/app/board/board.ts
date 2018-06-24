import { Row, TicTacToeRow } from './row';

export interface Board {
  rows: Row[];
}

export class TicTacToeBoard implements Board {
  rows: Row[];

  constructor() {
    this.rows = this.getRows();
   }
  static getNewBoard(): Board {
   return new TicTacToeBoard();
  }

  getRows(): Row[] {
    const first: Row = TicTacToeRow.getNewRow('first');
    const second: Row = TicTacToeRow.getNewRow('second');
    const third: Row = TicTacToeRow.getNewRow('third');
    return [first, second, third];
  }
}
