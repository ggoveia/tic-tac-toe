import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Value } from './value.enum';
import { Square } from './square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  square: Square = {
    id: 1,
    value: Value.noValue
  };

  @Output() changedValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectSquare() {
    this.square.value = Value.oValue;
  }
}
