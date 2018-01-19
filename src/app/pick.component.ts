import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-main-pick',
  template: `
    le resultat du choix
  `,
  styles: [`
  `]
})
export class PickComponent {

  constructor(
    private gameService: GameService
  ) {}

}
