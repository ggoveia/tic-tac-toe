import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Value } from './value.enum';
import { Square } from './square';
import { Position } from './position.enum';
import { GameService } from '../shared/game.service';
import { Row } from '../board/row';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input()
  square: Square;
  @Input()
  rowId: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onSelectSquare() {
    if(this.square.value == Value.noValue)
    this.gameService.changeSquareValueBasedOnPlayer(this.square);
  }
}
