import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-main-next',
  template: `
    <div class="full-height" fxLayout="column" fxLayoutAlign="center center">
      <div class="main-menu" fxLayout="column" fxLayoutAlign="stretch">
        <p>Filleul</p>
        <p>{{ (gameService.currentM1$ | async).nom }}</p>
        <button mat-raised-button routerLink="/main">Confirmer</button>
        <button mat-raised-button routerLink="/">Revenir à l'accueil</button>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class NextPlayerComponent {

  constructor(
    private gameService: GameService
  ) {}
  
}
