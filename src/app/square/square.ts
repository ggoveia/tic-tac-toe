import { Value } from './value.enum';

export class Square {
  value: Value;
  position: string;

  constructor(squareValue, position) {
    this.value = squareValue;
    this.position = position;
  }
}
