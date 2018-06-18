import { Component, OnInit, Input } from '@angular/core';
import { Row } from './row';
import { Board } from './board';
import { GameService } from '../game.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input()
  board: Board;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

}
