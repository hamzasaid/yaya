import { Injectable }    from '@angular/core'
import { Famille } from '../models/famille'
import { StorageService } from './storage.service'


@Injectable() 
export class FamilleService {

  constructor(private storageService: StorageService) { }

  getFamilles(): Famille[] {
    return this.storageService.FamilleList;
  }

}