import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { GameService } from '../services/game.service';
import { NewGameDialog } from './new-game-dialog.component';


@Component({
  selector: 'app-accueil',
  template: `
    <div class="full-height" fxLayout="column" fxLayoutAlign="center center">
      <div class="main-menu" fxLayout="column" fxLayoutAlign="stretch">
          <a class="btn-menu" (click)="lancerPartie(true)" mat-raised-button *ngIf="(gameService.gameStatus$ | async) > 0 && (gameService.gameStatus$ | async) < 3"  color="primary">Reprendre partie</a>
          <a class="btn-menu" (click)="lancerPartie(false)" mat-raised-button color="primary">Nouvelle partie</a>
          <a class="btn-menu" routerLink="/parametres" mat-raised-button color="primary">Paramètres</a>
          <a class="btn-menu" *ngIf="(gameService.gameStatus$ | async) > 2" routerLink="/resultats" mat-raised-button color="primary">Voir le résultat final</a>
      </div>
    </div>
  `,
  styles: [`
    .main-menu {
      width: 350px;
    }
    .btn-menu {
      margin-bottom: 20px;
    }
  `]
})
export class AccueilComponent {

  constructor(
    private router: Router, 
    private gameService: GameService,
    private dialog: MatDialog,
  ) {}
  
  canContinueGame(): boolean {
    return this.gameService.gameStatus$.value > 0 && this.gameService.gameStatus$.value < 3;
  }

  canShowFinalResult(): boolean {
    return this.gameService.gameStatus$.value > 2
  }

  lancerPartie(poursuivre: boolean): void {
    if (!poursuivre && this.gameService.gameStatus$.value > 0) {
      let dialogRef = this.dialog.open(NewGameDialog);
  
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.gameService.newGame();
          this.router.navigate(['/', 'next']);
        }
      });
    }
    else {
      this.router.navigate(['/', 'next']);      
    }
  }

}
