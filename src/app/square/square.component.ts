import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Value } from './value.enum';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Output() changedValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
