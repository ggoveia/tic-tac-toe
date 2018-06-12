import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Value } from './value.enum';
import { Square } from './square';
import { Position } from './position.enum';
import { GameService } from '../game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  square: Square = {
    value: Value.noValue,
    position: Position.left
  };

  @Output() changedValue = new EventEmitter();

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onSelectSquare() {
    this.square.value = Value.oValue;
  }
}
