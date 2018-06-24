import { Injectable } from '@angular/core';
import { Board } from '../board/board';
import { Row } from '../board/row';
import { Square } from '../square/square';
import { Value } from '../square/value.enum';
import { Result } from './result';


export interface ResultProcessor {
  result: Result;
  run(board: Board): Result;
}

@Injectable({
  providedIn: 'root'
})
export class ResultService implements ResultProcessor {
  result: Result;
  board: Board;

  constructor() { }

  with(board: Board): ResultService {
    this.board = board;
    return this;
  }

  run (): Result {
    this.confirmHorizontalValues()
    .confirmVerticalValues()
    .confirmDiagonalValues()
    .measureResult();

    return this.result;
  }

 measureResult(): ResultService {
   if (this.result === undefined) {
    this.result = Result.getNewResult(false,[]);
   }
   return this;
 }

  confirmVerticalValues(): ResultService {
    for (let i = 0; i <= this.board.rows.length - 1; i++ ) {
      const values = this.getVerticalValues(this.board.rows, i);

      if (this.haveSameValue(values)) {
       this.result = Result.getNewResult(true, values);
       return this;
      }
    }
    return this;
  }

  confirmHorizontalValues(): ResultService {
    this.board.rows.forEach(
      r => {
        if (this.haveSameValue(r.squares)) {
          this.result = Result.getNewResult(true, r.squares);
          return this;
        }
      }
    );
    return this;
  }

  confirmDiagonalValues(): ResultService {
    const leftToRightSquares = [this.board.rows[0].squares[0],this.board.rows[1].squares[1], this.board.rows[2].squares[2]];
    const rightToLeftSquares = [this.board.rows[0].squares[2], this.board.rows[1].squares[1], this.board.rows[2].squares[0]];

    if (this.haveSameValue(leftToRightSquares)) {
      this.result = Result.getNewResult(true, leftToRightSquares);
      return this;
    }

    if (this.haveSameValue(rightToLeftSquares)) {
      this.result = Result.getNewResult(true, rightToLeftSquares);
      return this;
    }

    return this;
  }

  getVerticalValues(rows: Row[], p) {
    const rowVerticalValues = [] ;
    rows.forEach(
      r => {
        rowVerticalValues.push(r.squares[p]);
      }
    );
    return rowVerticalValues;
  }

  haveSameValue(squareList: Array<Square>) {
    return squareList.every(s => s.value === Value.oValue) || squareList.every(s => s.value === Value.xValue);
  }

  diagonalHasSameValue(diagonalValues) {
    return diagonalValues.every(s => s.value === Value.oValue) || diagonalValues.every(s => s.value === Value.xValue);
  }
}
