import { Square } from '../square/square';

export class Row {
  squares: Square[];

  constructor(firstSquare, secondSquare, thirdSquare) {
    this.squares.push(firstSquare);
    this.squares.push(secondSquare);
    this.squares.push(thirdSquare);
  }
}
