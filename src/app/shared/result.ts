import { Square } from '../square/square';

export class Result {
  hasWinner = false;
  winnerSquares?: Square[];

  constructor(hasWinner: boolean, winnerSquares?: Square[]) {
    this.hasWinner = hasWinner;
    if (winnerSquares) { this.winnerSquares = winnerSquares; }
  }

  static getNewResult(hasWinner: boolean, winnerSquare: Square[]) {
    return new Result(hasWinner, winnerSquare);
  }
}
