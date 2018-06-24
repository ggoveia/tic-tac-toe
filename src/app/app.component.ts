import { Component, OnInit } from '@angular/core';
import { Game } from './shared/game';
import { GameService } from './shared/game.service';
import { Observable } from 'rxjs';
import { Board } from './board/board';
import { Player } from './shared/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  board: Board;

  public game: Observable<Game>;
  public player: Observable<Player>;

  title = 'TIC TAC TOE';
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.currentGame;
    this.player = this.gameService.currentPlayer;
    this.game.subscribe(g => this.board = g.board);
  }
}
