import { Square } from '../square/square';

export class Row {
  id: string;
  squares: Square[];

  constructor(id: string, firstSquare: Square, secondSquare: Square, thirdSquare: Square) {
    this.id = id;
    this.squares =[firstSquare, secondSquare, thirdSquare];
  }
}
