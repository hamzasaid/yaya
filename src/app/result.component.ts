import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-result',
  template: `
    <div class="full-height space-body" fxLayout="column" fxLayoutAlign="stretch">
      <div class="menu-toolbar" fxFlex="10" fxLayout="row" fxLayoutAlign="space-between center">
          <button fxFlexOffset="2" mat-raised-button (click)="back()">
            <mat-icon>arrow_back</mat-icon>
            Retour à l'accueil
          </button>
      </div>
      <div class="content mat-typography" fxLayout="column" fxLayoutAlign=" stretch" fxFlex>
        <mat-list>
          <h3 mat-subheader>Ateliers créés</h3>
          <mat-list-item *ngFor="let atelier of gameService.atelierList$ | async">
            <h4 mat-line>Atelier : {{ atelier.parrain.atelier }}</h4>
            <p mat-line>- Parrain : {{ atelier.parrain.nom }}</p>
            <p mat-line>-- Filleul(1) : {{ atelier.filleuls[0].nom }}</p>
            <p mat-line *ngIf="atelier.filleuls.length > 1">-- Filleul(2) : {{ atelier.filleuls[1].nom }}</p>
          </mat-list-item>
        </mat-list>
      </div>
    </div>
  `,
  styles: [`
    .result {
      margin-bottom: 20px;
    }
  `]
})
export class ResultComponent {

  constructor(private router: Router, private gameService: GameService) {}
  
  back() {
    this.router.navigate(['/']);
  }
  
}
