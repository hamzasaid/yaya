import { Injectable }    from '@angular/core'
import { EtudiantM1 } from '../models/etudiant-m1'
import { StorageService } from './storage.service'
import * as _ from 'lodash'


@Injectable() 
export class EtudiantM1Service {

  private _Etudiants : EtudiantM1[];

  constructor(private storageService: StorageService) { }

  getEtudiants(): EtudiantM1[] {
    this._Etudiants = this.storageService.EtudiantM1List;
    return this._Etudiants;
  }

  getEtudiant(id : number) : EtudiantM1 {
    if (_.isEmpty(this._Etudiants)) this.getEtudiants();
    return _.find(this._Etudiants, { 'id': id});
  }

}