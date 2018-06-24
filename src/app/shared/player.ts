import { Value } from '../square/value.enum';

export class Player {
  name: string;
  value: Value;

  private constructor(newName, newValue) {
    this.name = newName;
    this.value = newValue;
  }

  static getNewPlayer(name: string, value: Value){
    return new Player(name, value);
  }
}
