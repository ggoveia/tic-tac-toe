import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  Players: Player[];
  constructor() { }

  ngOnInit() {
  }

}
