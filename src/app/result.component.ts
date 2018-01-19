import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-result',
  template: `
    <div class="full-height" fxLayout="column" fxLayoutAlign="space-around start">
      <div fxLayout="row" fxLayoutAlign="start start">
          <button mat-raised-button color="primary" (click)="back()">
            <mat-icon>arrow_back</mat-icon>
            Retour à l'accueil
          </button> 
      </div>
      <div class="result" fxLayout="column" fxLayoutAlign="stretch">
        <mat-list>
          <h3 mat-subheader>Ateliers créés</h3>
          <mat-list-item *ngFor="let atelier of gameService.atelierList$ | async">
            <h4 mat-line>Atelier : {{ atelier.parrain.atelier }} - Famille : {{ atelier.parrain.famille | familyToString }}</h4>
            <p mat-line>- Parrain : {{ atelier.parrain.nom }} - {{ atelier.parrain.sexe | sexeToString }}</p>
            <p mat-line>-- Filleul(1) : {{ atelier.filleuls[0].nom }} - {{ atelier.filleuls[0].sexe | sexeToString }}</p>
            <p mat-line *ngIf="atelier.filleuls.length > 1">-- Filleul(2) : {{ atelier.filleuls[1].nom }} - {{ atelier.filleuls[1].sexe | sexeToString }}</p>
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
