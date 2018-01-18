import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Famille } from '../models/famille';
import { EtudiantM1 } from '../models/etudiant-m1';
import { EtudiantM2 } from '../models/etudiant-m2';
import { FamilleService } from "../services/famille.service"
import { EtudiantM1Service } from "../services/etudiant-m1.service"
import { EtudiantM2Service } from "../services/etudiant-m2.service"
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

	familleDataSource: MatTableDataSource<Famille>;
	private displayedFamilleColumns = ['id','nom', 'couleur'];
  
	etudiantM1DataSource: MatTableDataSource<EtudiantM1>;
	private displayedEtudiantM1Columns = ['id','nom', 'sexe'];
  
	etudiantM2DataSource: MatTableDataSource<EtudiantM2>;
	private displayedEtudiantM2Columns = ['id','nom', 'atelier', 'famille', 'sexe'];
  
  constructor(
      private familleService: FamilleService,
      private etudiantM1Service: EtudiantM1Service,
      private etudiantM2Service: EtudiantM2Service,
      private router: Router
  ) { }
    
  ngOnInit() {
    let familleList = this.familleService.getFamilles();
    let etudiantM1List = this.etudiantM1Service.getEtudiants();
    let etudiantM2List = this.etudiantM2Service.getEtudiants();
    this.familleDataSource = new MatTableDataSource<Famille>(familleList);
    this.etudiantM1DataSource = new MatTableDataSource<EtudiantM1>(etudiantM1List);
    this.etudiantM2DataSource = new MatTableDataSource<EtudiantM2>(etudiantM2List);
  }

  back() {
    this.router.navigate(['/']);
  }
  
}
