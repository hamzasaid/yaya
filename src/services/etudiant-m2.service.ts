import { Injectable }    from '@angular/core'
import { EtudiantM2 } from '../models/etudiant-m2'
import { StorageService } from './storage.service'


@Injectable() 
export class EtudiantM2Service {

  constructor(private storageService: StorageService) { }

  getEtudiants(): EtudiantM2[] {
    return this.storageService.EtudiantM2List;
  }

}