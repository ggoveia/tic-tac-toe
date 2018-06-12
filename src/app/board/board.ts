import { Square } from '../square/square';
import { Value } from '../square/value.enum';
import { Row } from './row';
import { Position } from '../square/position.enum';

export class Board {
  rows: Row[];

  constructor(definedRows: Row[]) {
    this.rows = definedRows;
   }
}
