import { Value } from './square/value.enum';
export class Player {
  name: string;
  value: Value;

  constructor(newName, newValue) {
    this.name = newName;
    this.value = newValue;
  }
}
