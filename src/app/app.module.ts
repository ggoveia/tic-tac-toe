import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ResultService } from './shared/result.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
