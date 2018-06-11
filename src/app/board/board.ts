import { Square } from '../square/square';
import { Value } from '../square/value.enum';
import { Row } from './row';

export class Board {
  row: Row[];

  constructor() {

    this.row.push(new Row(new Square('f1', Value.noValue),
                          new Square('f2', Value.noValue),
                          new Square('f3', Value.noValue)));

    this.row.push(new Row(new Square('s1', Value.noValue),
                          new Square('s2', Value.noValue),
                          new Square('s3', Value.noValue)));

    this.row.push(new Row(new Square('t1', Value.noValue),
                          new Square('t2', Value.noValue),
                          new Square('t3', Value.noValue)));
  }
}
