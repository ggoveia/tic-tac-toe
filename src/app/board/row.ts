import { Square } from '../square/square';

export class Row {
  id: string;
  squares: Square[];
  risk: string;

  constructor(id: string, firstSquare: Square, secondSquare: Square, thirdSquare: Square) {
    this.id = id;
    this.squares =[firstSquare, secondSquare, thirdSquare];
  }
}
