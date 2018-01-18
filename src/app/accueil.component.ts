import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  template: `
    <div class="full-height" fxLayout="column" fxLayoutAlign="center center">
      <div class="main-menu" fxLayout="column" fxLayoutAlign="space-around stretch">
          <a (click)="lancerPartie(true)" mat-raised-button disabled="{{ storageService.gameStatus <= 0 }}"  color="primary">Reprendre partie</a>
          <a (click)="lancerPartie(false)" mat-raised-button color="primary">Nouvelle partie</a>
          <a routerLink="/parametres" mat-raised-button color="primary">Paramètres</a>
      </div>
    </div>
  `,
  styles: [`
    .main-menu {
      width: 350px;
      height: 150px;
      border: 2px;
      border-color: red;
    }
  `]
})
export class AccueilComponent {

  constructor(private router: Router, private storageService: StorageService) {
  }
  
  lancerPartie(poursuivre: boolean): void {
    if (!poursuivre) {
      this.storageService.reset();
      this.storageService.currentM1 = 1;
      this.storageService.gameStatus = 1;
    }
    this.router.navigate(['/', 'main']);
  }
}
