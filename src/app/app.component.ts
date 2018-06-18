import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';
import { Observable } from 'rxjs';
import { Board } from './board/board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  board: Board;
  public game: Observable<Game>;
  title = 'TIC TAC TOE';
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.currentGame;
    this.game.subscribe(g => this.board = g.board);
  }
}
