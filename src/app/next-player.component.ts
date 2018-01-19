import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-main-next',
  template: `
    <div class="full-height space-body" fxLayout="column" fxLayoutAlign="stretch">
      <div class="menu-toolbar" fxFlex="10" fxLayout="row" fxLayoutAlign="space-between center">
          <button fxFlexOffset="2" mat-raised-button routerLink="/">
            <mat-icon>arrow_back</mat-icon>
            Retour à l'accueil
          </button>
          <div class="push-right">
            <button mat-raised-button color="primary" routerLink="/main">
              Poursuivre
              <mat-icon>forward</mat-icon>
            </button>
          </div>
      </div>
      <div class="content" fxLayout="column" fxLayoutAlign="center center">
        <mat-card class="example-card">
          <mat-card-header>
            <mat-card-title>{{ (gameService.currentM1$ | async).nom }}</mat-card-title>
          </mat-card-header>
          <img mat-card-image [src]="(gameService.currentM1$ | async).avatar" alt="avatar">
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
  .example-card {
      width: 400px;
    }
  `]
})
export class NextPlayerComponent {

  constructor(
    private gameService: GameService
  ) {}
  
}
