import { Value } from './value.enum';

export class Square {
  id: string;
  value: Value;
  position: string;
  winner: string;

  constructor(id, squareValue, position) {
    this.id = id;
    this.value = squareValue;
    this.position = position;
  }
}
