import { Component } from '@angular/core';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-result-view-list',
  template: `
    view list
  `,
  styles: [`
  `]
})
export class ResultViewListComponent {

  constructor(private gameService: GameService) {}
  
}
