import { Value } from './value.enum';

export class Square {
  id: string;
  value: Value;

  constructor(squareId, squareValue) {
    this.id = squareId;
    this.value = squareValue;
  }
}
