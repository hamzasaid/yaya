import { Component } from '@angular/core';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-result-view-bloc',
  template: `
    view bloc
  `,
  styles: [`
  `]
})
export class ResultViewBlocComponent {

  constructor(private gameService: GameService) {}
  
}
