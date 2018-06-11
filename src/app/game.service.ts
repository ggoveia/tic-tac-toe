import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

   getFirstPlayer(players) {
    return players[Math.floor(Math.random() * players.length)];
   }
  constructor() {

  }
}
