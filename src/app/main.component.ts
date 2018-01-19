import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Famille } from '../models/famille';

import { GameService } from '../services/game.service';

import * as _ from 'lodash';
//import filter from 'lodash/filter';


@Component({
  selector: 'app-main',
  template: `
  <div class="full-height space-body" fxLayout="column" fxLayoutAlign="stretch">
    <div class="menu-toolbar" fxFlex="10" fxLayout="row" fxLayoutAlign="space-between center">
        <button fxFlexOffset="2" mat-raised-button routerLink="/">
          <mat-icon>arrow_back</mat-icon>
          Retour à l'accueil
        </button>
        <div>
        <h2 class="mat-h2" style="margin:0">{{ numberPlayed }} / {{ totalPlayers }}</h2>
        </div>
        <div class="push-right avatar-toolbar mat-typography">
          <span>{{ (gameService.currentM1$ | async).nom }}</span>
          <img style="vertical-align:middle" [src]="(gameService.currentM1$ | async).avatar" width="40px">
        </div>
    </div>

    <div *ngIf="(gameService.currentM2$ | async).id <= 0" class="main-body" fxLayout="row" fxLayoutAlign="space-evenly center" fxFlex>
      <div class="pick-family" *ngFor="let family of familyList" fxLayout="column" fxLayoutAlign="stretch">
        <button class="btn-family" [ngClass]="{'light-background' : family.id == 1}" [style.background-color]="getStyle(family)" disabled="{{ disabledPickBtn(family.id) }}" (click)="pick(family.id)" mat-raised-button>{{ family.nom }}</button>
      </div>
    </div>

    <div *ngIf="(gameService.currentM2$ | async).id > 0" class="main-body" fxLayout="column" fxLayoutAlign="center" fxFlex>
      <div class="nom-atelier" fxLayout="row" fxLayoutAlign="center center">
        <h1 class="mat-h1">Atelier : {{ (gameService.currentM2$ | async).atelier }}</h1>
      </div>
      <div class="photos-versus" fxLayout="row" fxLayoutAlign="center center">
        <mat-card class="pick-card">
          <mat-card-header>
          <mat-card-title>{{ (gameService.currentM2$ | async).nom }}</mat-card-title>
          </mat-card-header>
          <img mat-card-image [src]="(gameService.currentM2$ | async).avatar" alt="avatar">
        </mat-card>
        <mat-card class="pick-card">
          <mat-card-header>
          <mat-card-title>{{ (gameService.currentM1$ | async).nom }}</mat-card-title>
          </mat-card-header>
          <img mat-card-image [src]="(gameService.currentM1$ | async).avatar" alt="avatar">
        </mat-card>
      </div>
      <div class="action" fxLayout="row" fxLayoutAlign="center strech">
        <button style="width:700px;" mat-raised-button color="primary" (click)="confirmer()">Confirmer</button>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .btn-family { height: 230px; width: 230px; color: white}
    .light-background { color: black }
    .pick-card { width: 300px; margin: 10px; }
  `]
})
export class MainComponent implements OnInit {

  familyList : Famille[] = [];

  constructor(
    private router: Router, 
    private gameService : GameService,
  ) {}

  ngOnInit() {
    this.familyList = this.gameService.shuffleFamilyList;
  }

  getStyle(family: Famille): string {
    return this.disabledPickBtn(family.id) ? 'none' : family.couleur;
  }

  disabledPickBtn(family : number): boolean {
    let result : boolean;
    if (this.gameService.currentM1$.value.sexe == 'M') {
      if (this.mercantilistesFemmes <= 0
        && this.physiocratesFemmes <= 0
        && this.classiquesFemmes <= 0
        && this.keynesiensFemmes <= 0) {
          result =  true;
      }
      else {
        switch (family) {
          case 1:
            result = this.mercantilistesFemmes > 0;
            break;
          
            case 2:
            result = this.physiocratesFemmes > 0;
            break;
          
            case 3:
            result = this.classiquesFemmes > 0;
            break;
          
            case 4:
            result = this.keynesiensFemmes > 0;
            break;
        }
      }
    }
    else {
      if (this.mercantilistesHommes <= 0
        && this.physiocratesHommes <= 0
        && this.classiquesHommes <= 0
        && this.keynesiensHommes <= 0) {
          result =  true;
      }
      else {
        switch (family) {
          case 1:
            result = this.mercantilistesHommes > 0;
            break;
          
            case 2:
            result = this.physiocratesHommes > 0;
            break;
          
            case 3:
            result = this.classiquesHommes > 0;
            break;
          
            case 4:
            result = this.keynesiensHommes > 0;
            break;
        }
      }
    }
    switch (family) {
      case 1:
        result = result && this.mercantilistesTotal > 0;
        break;
      
        case 2:
        result = result && this.physiocratesTotal > 0;
        break;
      
        case 3:
        result = result && this.classiquesTotal > 0;
        break;
      
        case 4:
        result = result && this.keynesiensTotal > 0;
        break;
    }
    return !result;
  }

  pick(family : number): void {
    let sexe : string;
    if (this.gameService.currentM1$.value.sexe == 'M') {
      switch (family) {
        case 1:
          if (this.mercantilistesFemmes <= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
        
          case 2:
          if (this.physiocratesFemmes <= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
        
          case 3:
          if (this.classiquesFemmes <= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
        
          case 4:
          if (this.keynesiensFemmes <= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
      }
    }
    else {
      switch (family) {
        case 1:
          if (this.mercantilistesHommes >= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
        
          case 2:
          if (this.physiocratesHommes >= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
        
          case 3:
          if (this.classiquesHommes >= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
        
          case 4:
          if (this.keynesiensHommes >= 0)
            sexe = 'M';
          else
            sexe = 'F'
          break;
      }
    }

    this.gameService.pickParrain(family, sexe);
  }

  confirmer() : void {
    if(this.gameService.confirmCouple())
      this.router.navigate(['/', 'next']);
    else
      this.router.navigate(['/']);
  }

  private get totalPlayers(): number {
    return this.gameService.etudiantM1List.length;
  }

  private get numberPlayed(): number {
    return this.gameService.etudiantM1List.length - this.gameService.bufferList$.value.length;
  }

  private get mercantilistesTotal(): number {
    return this.gameService.mercantilMember$.value.length;
  }

  private get mercantilistesFemmes(): number {
    let list = _.filter(this.gameService.mercantilMember$.value, x => x.sexe == 'F');
    return list.length;
  }

  private get mercantilistesHommes(): number {
    let list = _.filter(this.gameService.mercantilMember$.value, x => x.sexe == 'M');
    return list.length;
  }

  private get physiocratesTotal(): number {
    return this.gameService.physiocratMember$.value.length;
  }

  private get physiocratesFemmes(): number {
    let list = _.filter(this.gameService.physiocratMember$.value, x => x.sexe == 'F');
    return list.length;
  }

  private get physiocratesHommes(): number {
    let list = _.filter(this.gameService.physiocratMember$.value, x => x.sexe == 'M');
    return list.length;
  }

  private get classiquesTotal(): number {
    return this.gameService.classiqMember$.value.length;
  }

  private get classiquesFemmes(): number {
    let list = _.filter(this.gameService.classiqMember$.value, x => x.sexe == 'F');
    return list.length;
  }

  private get classiquesHommes(): number {
    let list = _.filter(this.gameService.classiqMember$.value, x => x.sexe == 'M');
    return list.length;
  }

  private get keynesiensTotal(): number {
    return this.gameService.keynesienMember$.value.length;
  }

  private get keynesiensFemmes(): number {
    let list = _.filter(this.gameService.keynesienMember$.value, x => x.sexe == 'F');
    return list.length;
  }

  private get keynesiensHommes(): number {
    let list = _.filter(this.gameService.keynesienMember$.value, x => x.sexe == 'M');
    return list.length;
  }

}
