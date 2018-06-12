import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  game: Game;
  title = 'TIC TAC TOE';
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = new Game(this.gameService);
  }
}
