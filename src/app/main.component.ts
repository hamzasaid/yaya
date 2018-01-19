import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Famille } from '../models/famille';

import { GameService } from '../services/game.service';

import * as _ from 'lodash';
//import filter from 'lodash/filter';


@Component({
  selector: 'app-main',
  template: `
  <div class="full-height" fxLayout="column" fxLayoutAlign="space-between stretch">
    <div class="main-header" fxLayout="row" fxLayoutAlign="space-around center" fxFlex="20">
      <button mat-raised-button routerLink="/" color="primary">
        <mat-icon>arrow_back</mat-icon> Retour accueil
      </button>
      <span>{{ (gameService.currentM1$ | async).nom }} - {{ (gameService.currentM1$ | async).sexe | sexeToString }}</span>
    </div>
    <div *ngIf="(gameService.currentM2$ | async).id <= 0" class="main-body" fxLayout="row" fxLayoutAlign="space-evenly center" fxFlex>
      <div class="pick-family" fxLayout="column" fxLayoutAlign="space-between stretch">
        <button class="btn-family family-yellow" disabled="{{ disabledPickBtn(1) }}" (click)="pick(1)" mat-raised-button>MERCANTILISTES</button>
        <p>Total prs: {{ mercantilistesTotal }}</p>
        <p>Total hommes: {{ mercantilistesHommes }}</p>
        <p>Total femmes: {{ mercantilistesFemmes }}</p>
      </div>
      <div class="pick-family" fxLayout="column" fxLayoutAlign="space-between stretch">
        <button class="btn-family family-green" disabled="{{ disabledPickBtn(2) }}" (click)="pick(2)" mat-raised-button>PHYSIOCRATES</button>
        <p>Total prs: {{ physiocratesTotal  }}</p>
        <p>Total hommes: {{ physiocratesHommes }}</p>
        <p>Total femmes: {{ physiocratesFemmes }}</p>
      </div>
      <div class="pick-family" fxLayout="column" fxLayoutAlign="space-between stretch">
        <button class="btn-family family-blue" disabled="{{ disabledPickBtn(3) }}" (click)="pick(3)" mat-raised-button>CLASSIQUES</button>
        <p>Total prs: {{ classiquesTotal }}</p>
        <p>Total hommes: {{ classiquesHommes }}</p>
        <p>Total femmes: {{ classiquesFemmes }}</p>
      </div>
      <div class="pick-family" fxLayout="column" fxLayoutAlign="space-between stretch">
        <button class="btn-family family-red" disabled="{{ disabledPickBtn(4) }}" (click)="pick(4)" mat-raised-button>KEYNESIENS</button>
        <p>Total prs: {{ keynesiensTotal }}</p>
        <p>Total hommes: {{ keynesiensHommes }}</p>
        <p>Total femmes: {{ keynesiensFemmes }}</p>
      </div>
    </div>
    <div *ngIf="(gameService.currentM2$ | async).id > 0" class="main-body" fxLayout="row" fxLayoutAlign="space-evenly center" fxFlex>
      <p>{{ (gameService.currentM2$ | async).atelier }}</p>
      <p>{{ (gameService.currentM2$ | async).nom }}</p>
      <p>{{ (gameService.currentM1$ | async).nom }}</p>
      <button mat-raised-button (click)="confirmer()">Confirmer</button>
    </div>
  </div>
  `,
  styles: [`
    .btn-family { height: 90px; color: white}
    .family-blue { background-color: blue }
    .family-yellow { background-color: yellow; color: gray }
    .family-green { background-color: green }
    .family-red { background-color: red }
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
