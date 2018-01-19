import { Injectable }    from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { StorageService } from './storage.service';

import { Atelier } from '../models/atelier';
import { Famille } from '../models/famille'
import { EtudiantM1 } from '../models/etudiant-m1';
import { EtudiantM2 } from '../models/etudiant-m2';

import * as _ from 'lodash';
//import shuffle from 'lodash/shuffle';
//import find from 'lodash/find';
//import filter from 'lodash/filter';
//import remove from 'lodash/remove';
//import isEmpty from 'lodash/isEmpty';


@Injectable() 
export class GameService {

  private _etudiantM1List : EtudiantM1[];
  private _etudiantM2List : EtudiantM2[];

  public currentM1$ : BehaviorSubject<EtudiantM1>;
  public currentM2$ : BehaviorSubject<EtudiantM2>;
  public atelierList$ : BehaviorSubject<Atelier[]>;
  public gameStatus$ : BehaviorSubject<number>;
  public bufferList$ : BehaviorSubject<number[]>;
  public mercantilMember$ : BehaviorSubject<EtudiantM2[]>;
  public physiocratMember$ : BehaviorSubject<EtudiantM2[]>;
  public classiqMember$ : BehaviorSubject<EtudiantM2[]>;
  public keynesienMember$ : BehaviorSubject<EtudiantM2[]>;

  constructor(
    private storageService: StorageService,
  ) { 

    this._etudiantM1List = [];
    this._etudiantM2List = [];

    // init Current M1
    let indice = this.storageService.currentM1;
    if (indice > 0) {
      let etudiant = this.getEtudiantM1(indice);
      this.currentM1$ = new BehaviorSubject<EtudiantM1>(etudiant);
    }
    else {
      this.currentM1$ = new BehaviorSubject<EtudiantM1>(new EtudiantM1());
    }
    
    // init Current M2
    indice = this.storageService.currentM2;
    if (indice > 0) {
      let etudiant = this.getEtudiantM2(indice);
      this.currentM2$ = new BehaviorSubject<EtudiantM2>(etudiant);
    }
    else {
      this.currentM2$ = new BehaviorSubject<EtudiantM2>(new EtudiantM2());
    }

    // init Game Status
    indice = this.storageService.gameStatus;
    this.gameStatus$ = new BehaviorSubject<number>(indice);

    // init Atelier List
    let list = this.storageService.atelierList;
    this.atelierList$ = new BehaviorSubject<Atelier[]>(list);

    // init buffer list
    let bufList = this.storageService.bufferList;
    this.bufferList$ = new BehaviorSubject<number[]>(bufList);

    // init compteurs
    this.mercantilMember$ = new BehaviorSubject<EtudiantM2[]>([]);
    this.physiocratMember$ = new BehaviorSubject<EtudiantM2[]>([]);
    this.classiqMember$ = new BehaviorSubject<EtudiantM2[]>([]);
    this.keynesienMember$ = new BehaviorSubject<EtudiantM2[]>([]);
    this.initMembersList();

    console.log('currentM1', this.currentM1$.value);
    console.log('currentM2', this.currentM2$.value);
    console.log('gameStatus', this.gameStatus$.value);
    console.log('atelierList', this.atelierList$.value);
    console.log('bufferList', this.bufferList$.value);
    console.log('mercantilMember', this.mercantilMember$.value);
    console.log('physiocratMember', this.physiocratMember$.value);
    console.log('classiqMember', this.classiqMember$.value);
    console.log('keynesienMember', this.keynesienMember$.value);
  }

  public newGame() : void {
    this.storageService.reset();
    let buffer = this.storageService.bufferList;
    buffer = _.shuffle(buffer);
    this.storageService.currentM1 = buffer.shift();
    this.storageService.bufferList = buffer;
    this.storageService.currentM2 = 0;
    this.storageService.gameStatus = 1;

    this.currentM1$.next(this.getEtudiantM1(this.storageService.currentM1));
    this.currentM2$.next(new EtudiantM2());
    this.atelierList$.next([]);
    this.bufferList$.next(buffer);
    this.gameStatus$.next(1);

    
    console.log('currentM1', this.currentM1$.value);
    console.log('currentM2', this.currentM2$.value);
    console.log('gameStatus', this.gameStatus$.value);
    console.log('atelierList', this.atelierList$.value);
    console.log('bufferList', this.bufferList$.value);
    console.log('mercantilMember', this.mercantilMember$.value);
    console.log('physiocratMember', this.physiocratMember$.value);
    console.log('classiqMember', this.classiqMember$.value);
    console.log('keynesienMember', this.keynesienMember$.value);
  }

  public pickParrain(family: number, sexe: string): void {
    let list : EtudiantM2[];
    switch (family) {
      case 1:
        list = _.filter(this.mercantilMember$.value, x => x.sexe == sexe);
        if (list.length == 1) {
          this.storageService.currentM2 = list[0].id;
          this.currentM2$.next(list[0]);
        }
        else {
          let indice = this.randomIntFromInterval(1, list.length) - 1;
        this.storageService.currentM2 = list[indice].id;
          this.currentM2$.next(list[indice]);
        }
        break;
    
      case 2:
        list = _.filter(this.physiocratMember$.value, x => x.sexe == sexe);
        if (list.length == 1) {
          this.storageService.currentM2 = list[0].id;
          this.currentM2$.next(list[0]);
        }
        else {
          let indice = this.randomIntFromInterval(1, list.length) - 1;
        this.storageService.currentM2 = list[indice].id;
          this.currentM2$.next(list[indice]);
        }
        break;
    
      case 3:
        list = _.filter(this.classiqMember$.value, x => x.sexe == sexe);
        if (list.length == 1) {
          this.storageService.currentM2 = list[0].id;
          this.currentM2$.next(list[0]);
        }
        else {
          let indice = this.randomIntFromInterval(1, list.length) - 1;
        this.storageService.currentM2 = list[indice].id;
          this.currentM2$.next(list[indice]);
        }
        break;
    
      case 4:
        list = _.filter(this.keynesienMember$.value, x => x.sexe == sexe);
        if (list.length == 1) {
          this.storageService.currentM2 = list[0].id;
          this.currentM2$.next(list[0]);
        }
        else {
          let indice = this.randomIntFromInterval(1, list.length) - 1;
        this.storageService.currentM2 = list[indice].id;
          this.currentM2$.next(list[indice]);
        }
        break;
    }

  }

  public confirmCouple(): boolean {
    let ateliers = this.atelierList$.value;
    let ateliersRemove : Atelier[] = _.remove(ateliers, x => x.parrain.id == this.currentM2$.value.id);

    let atelier : Atelier;
    if (_.isEmpty(ateliersRemove)) {
      atelier = new Atelier();
      atelier.parrain = this.currentM2$.value;
    }
    else {
      atelier = ateliersRemove[0];
    }

    atelier.filleuls.push(this.currentM1$.value);
    ateliers.push(atelier);

    this.storageService.atelierList = ateliers;
    this.atelierList$.next(ateliers);

    let listMember;
    switch (this.currentM2$.value.famille) {
      case 1:
        listMember = this.mercantilMember$.value;
        _.remove(listMember, x => x.id == this.currentM2$.value.id)
        this.mercantilMember$.next(listMember);
        break;
    
      case 2:
        listMember = this.physiocratMember$.value;
        _.remove(listMember, x => x.id == this.currentM2$.value.id)
        this.physiocratMember$.next(listMember);
        break;
    
      case 3:
        listMember = this.classiqMember$.value;
        _.remove(listMember, x => x.id == this.currentM2$.value.id)
        this.classiqMember$.next(listMember);
        break;
    
      case 4:
        listMember = this.keynesienMember$.value;
        _.remove(listMember, x => x.id == this.currentM2$.value.id)
        this.keynesienMember$.next(listMember);
        break;
    }

    return this.nextPlay();
  }

  private nextPlay(): boolean {
    if (_.isEmpty(this.bufferList$.value)) {
      this.storageService.gameStatus = 3;
      this.storageService.currentM1 = 0;
      this.storageService.currentM2 = 0;
      this.currentM1$.next(new EtudiantM1());
      this.currentM2$.next(new EtudiantM2());
      this.gameStatus$.next(3);
      
    console.log('currentM1', this.currentM1$.value);
    console.log('currentM2', this.currentM2$.value);
    console.log('gameStatus', this.gameStatus$.value);
    console.log('atelierList', this.atelierList$.value);
    console.log('bufferList', this.bufferList$.value);
    console.log('mercantilMember', this.mercantilMember$.value);
    console.log('physiocratMember', this.physiocratMember$.value);
    console.log('classiqMember', this.classiqMember$.value);
    console.log('keynesienMember', this.keynesienMember$.value);
    
      return false;
    }
    else {
      let buffer = this.bufferList$.value;
      buffer = _.shuffle(buffer);
      this.storageService.currentM1 = buffer.shift();
      this.storageService.currentM2 = 0;
      this.currentM1$.next(this.getEtudiantM1(this.storageService.currentM1));
      this.currentM2$.next(new EtudiantM2());

      this.storageService.bufferList = buffer;
      this.bufferList$.next(buffer);

      if (_.isEmpty(this.mercantilMember$.value)
        && _.isEmpty(this.physiocratMember$.value)
        && _.isEmpty(this.classiqMember$.value)
        && _.isEmpty(this.keynesienMember$.value)) {
          this.storageService.gameStatus = 2;
          this.gameStatus$.next(2);
          this.initMembersList();
      }

      console.log('currentM1', this.currentM1$.value);
      console.log('currentM2', this.currentM2$.value);
      console.log('gameStatus', this.gameStatus$.value);
      console.log('atelierList', this.atelierList$.value);
      console.log('bufferList', this.bufferList$.value);
      console.log('mercantilMember', this.mercantilMember$.value);
      console.log('physiocratMember', this.physiocratMember$.value);
      console.log('classiqMember', this.classiqMember$.value);
      console.log('keynesienMember', this.keynesienMember$.value);
      
      return true;
    }
  }

  private initMembersList(): void {
    let mercantil : EtudiantM2[] = [];
    let physiocrat : EtudiantM2[] = [];
    let classiq : EtudiantM2[] = [];
    let keynesien : EtudiantM2[] = [];

    this.etudiantM2List.forEach(item => {
      switch (item.famille) {
        case 1:
          mercantil.push(item);
          break;
      
        case 2:
          physiocrat.push(item);
          break;
      
        case 3:
          classiq.push(item);
          break;
      
        case 4:
          keynesien.push(item);
          break;
      }
    });

    this.atelierList$.value.forEach(item => {
      if (item.filleuls.length == this.gameStatus$.value) {
        switch (item.parrain.famille) {
          case 1:
            _.remove(mercantil, x => x.id == item.parrain.id);
            break;
        
          case 2:
            _.remove(physiocrat, x => x.id == item.parrain.id);
            break;
        
          case 3:
            _.remove(classiq, x => x.id == item.parrain.id);
            break;
        
          case 4:
            _.remove(keynesien, x => x.id == item.parrain.id);
            break;
        }
      }
    });
    
    this.mercantilMember$.next(mercantil);
    this.physiocratMember$.next(physiocrat);
    this.classiqMember$.next(classiq);
    this.keynesienMember$.next(keynesien);
  }

  public get familyList(): Famille[] {
    return this.storageService.familleList;
  }

  public get shuffleFamilyList() : Famille[] {
    let list = this.familyList;
    return list;
  }

  public get etudiantM1List(): EtudiantM1[] {
    if (_.isEmpty(this._etudiantM1List)) {
      this.storageService.etudiantM1List.forEach(item => {
        this._etudiantM1List.push(new EtudiantM1(item));
      })
    }
    return this._etudiantM1List;
  }

  private getEtudiantM1(id : number) : EtudiantM1 {
    let list = this.etudiantM1List;
    return _.find(list, { 'id': id});
  }

  public get etudiantM2List(): EtudiantM2[] {
    if (_.isEmpty(this._etudiantM2List)) {
      this.storageService.etudiantM2List.forEach(item => {
        this._etudiantM2List.push(new EtudiantM2(item));
      })
    }
    return this._etudiantM2List;
  }

  private getEtudiantM2(id : number) : EtudiantM2 {
    let list = this.etudiantM2List;
    return _.find(list, { 'id': id});
  }

  private randomIntFromInterval(min : number, max : number): number {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

}