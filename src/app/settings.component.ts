import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Famille } from '../models/famille';
import { EtudiantM1 } from '../models/etudiant-m1';
import { EtudiantM2 } from '../models/etudiant-m2';
import { GameService } from "../services/game.service"
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

	familleDataSource: MatTableDataSource<Famille>;
	private displayedFamilleColumns = ['id','nom', 'couleur'];
  
	etudiantM1DataSource: MatTableDataSource<EtudiantM1>;
	private displayedEtudiantM1Columns = ['id','nom', 'sexe', 'avatar'];
  
	etudiantM2DataSource: MatTableDataSource<EtudiantM2>;
	private displayedEtudiantM2Columns = ['id','nom', 'atelier', 'famille', 'sexe', 'avatar'];
  
  constructor(
      private gameService: GameService,
      private router: Router
  ) { }
    
  ngOnInit() {
    let familleList = this.gameService.familyList;
    let etudiantM1List = this.gameService.etudiantM1List;
    let etudiantM2List = this.gameService.etudiantM2List;
    this.familleDataSource = new MatTableDataSource<Famille>(familleList);
    this.etudiantM1DataSource = new MatTableDataSource<EtudiantM1>(etudiantM1List);
    this.etudiantM2DataSource = new MatTableDataSource<EtudiantM2>(etudiantM2List);
  }

  back() {
    this.router.navigate(['/']);
  }
  
}
