import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Observable } from "rxjs/Observable"
import { switchMap } from 'rxjs/operators';

import { EtudiantM1 } from '../models/etudiant-m1';
import { StorageService } from '../services/storage.service';
import { FamilleService } from '../services/famille.service';
import { EtudiantM1Service } from '../services/etudiant-m1.service';
import { Famille } from '../models/famille';

@Component({
  selector: 'app-main',
  template: `
  <div class="full-height" fxLayout="column" fxLayoutAlign="space-between stretch">
    <div class="main-header" fxLayout="row" fxLayoutAlign="space-around center" fxFlex="20">
      <button mat-raised-button>
        <mat-icon>arrow_back</mat-icon> Retour accueil
      </button>
      <span>{{ _etudiantM1.nom }}</span>
    </div>
    <div class="main-body" fxLayout="row" fxLayoutAlign="space-evenly center" fxFlex>
      <button class="btn-family family-yellow" mat-raised-button>MERCANTILISTES</button>
      <button class="btn-family family-green" mat-raised-button>PHYSIOCRATES</button>
      <button class="btn-family family-blue" mat-raised-button>CLASSIQUES</button>
      <button class="btn-family family-red" mat-raised-button>KEYNESIENS</button>
    </div>
  </div>
  `,
  styles: [`
    /*.main-header { background-color: red}
    .main-body { background-color: purple}*/
    .btn-family { height: 90px; color: white}
    .family-blue { background-color: blue }
    .family-yellow { background-color: yellow }
    .family-green { background-color: green }
    .family-red { background-color: red }
  `]
})
export class MainComponent implements OnInit {

  private _etudiantM1 : EtudiantM1;
  private _familles : Famille[];

  constructor(
    private storageService : StorageService,
    private familleService : FamilleService,
    private etudiantM1Service : EtudiantM1Service
  ) {}

  ngOnInit() {
    this._etudiantM1 = this.etudiantM1Service.getEtudiant(this.storageService.currentM1);
    this._familles = this.familleService.getFamilles();
  }

}
