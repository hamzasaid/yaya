import { Injectable } from '@angular/core';
import { EtudiantM1 } from '../models/etudiant-m1'
import { EtudiantM2 } from '../models/etudiant-m2'
import { Famille } from '../models/famille'

const M1List = [
  { id: 1, nom: 'ABDELAZIZE Imaila', sexe: 'M' },
  { id: 2, nom: 'ABOE Ndouma Franck Michel', sexe: 'M' },
  { id: 3, nom: 'ABOUBAKAR Siddigou', sexe: 'M' },
  { id: 4, nom: 'ADAMOU Abdoulaye', sexe: 'M' },
  { id: 5, nom: 'AFANA Koua Erika Chavelle', sexe: 'F' },
  { id: 6, nom: 'AMIRA Halilou', sexe: 'F' },
  { id: 7, nom: 'ATOH Senora Manka’a', sexe: 'F' },
  { id: 8, nom: 'BAKARI Wouassouni', sexe: 'M' },
  { id: 9, nom: 'BISSE Lise Chimène', sexe: 'F' },
  { id: 10, nom: 'BOMA Evis Suh', sexe: 'M' },
  { id: 11, nom: 'EBELLE Mpondo Djemba Ebenezer', sexe: 'M' },
  { id: 12, nom: 'EBOCK Aymar Achille Boris', sexe: 'M' },
  { id: 13, nom: 'EBOGO Ada Emilie', sexe: 'F' },
  { id: 14, nom: 'EDOUMA Maurice Landry', sexe: 'M' },
  { id: 15, nom: 'ELANGUE Matoukou Cyrille', sexe: 'M' },
  { id: 16, nom: 'EMADAK Gladys Marcelle', sexe: 'F' },
  { id: 17, nom: 'ESSAME Gervais Yannick', sexe: 'M' },
  { id: 18, nom: 'ESSOH Epote Isabelle Flora', sexe: 'F' },
  { id: 19, nom: 'GAMO Djomo Jules Armel', sexe: 'M' },
  { id: 20, nom: 'GUIAKAM Ngounoue Candace', sexe: 'F' },
  { id: 21, nom: 'GODONOU Dossou Jupiter Junior G.', sexe: 'M' },
  { id: 22, nom: 'HABOUBAKAR Dantini', sexe: 'M' },
  { id: 23, nom: 'LONGOK Monok Jean', sexe: 'M' },
  { id: 24, nom: 'KEMENANG Zanjio Gamalière', sexe: 'M' },
  { id: 25, nom: 'KENAH Lille Pascal Mbong', sexe: 'F' },
  { id: 26, nom: 'MATCHEU Mbe Cecile Murielle', sexe: 'F' },
  { id: 27, nom: 'MBIANGO François', sexe: 'M' },
  { id: 28, nom: 'MENKEGNE Audrey Normande', sexe: 'F' },
  { id: 29, nom: 'MINKONGO Minkongo Cyrille Kevin', sexe: 'M' },
  { id: 30, nom: 'MOHAMADOU Moctar', sexe: 'M' },
  { id: 31, nom: 'MONTHE Deankam Danielle  Olivia', sexe: 'F' },
  { id: 32, nom: 'MOUASSOM De Tcheutou Manuela', sexe: 'F' },
  { id: 33, nom: 'MUNONGO Marowa Leonelle', sexe: 'F' },
  { id: 34, nom: 'NDENGUE Brice Albert', sexe: 'M' },
  { id: 35, nom: 'NDONGMO Tsanang Alvine', sexe: 'F' },
  { id: 36, nom: 'NDO Nnengue Esther Belly', sexe: 'F' },
  { id: 37, nom: 'NDORADOUM Kodjadoum', sexe: 'M' },
  { id: 38, nom: 'NGAIMBOU-DATOMA Roméo Benistant', sexe: 'M' },
  { id: 39, nom: 'NGO Ndjock Claire Christiane', sexe: 'F' },
  { id: 40, nom: 'NGONO Paule Andrea ', sexe: 'F' },
  { id: 41, nom: 'NOMBOU Yimele Sylvana', sexe: 'F' },
  { id: 42, nom: 'NTONO Ottou Joseph D’estaing', sexe: 'M' },
  { id: 43, nom: 'NYANGO Ndjabi Elise Laétitia', sexe: 'F' },
  { id: 44, nom: 'NOUKIE Yanha Nguewou Cédrick', sexe: 'M' },
  { id: 45, nom: 'OWONA Atangana Geneviève', sexe: 'F' },
  { id: 46, nom: 'SIM Rémy Emmanuel Clément', sexe: 'M' },
  { id: 47, nom: 'SIMO Takam Loic Harold', sexe: 'M' },
  { id: 48, nom: 'TAZOH Venland Teke', sexe: 'M' },
  { id: 49, nom: 'UM Alix Therance ', sexe: 'F' },
  { id: 50, nom: 'ZANGUE Tegoudjou Ogris Carnot', sexe: 'M' }
];

const M2List = [
  { id: 1, nom: 'AKONO Jean Noël Stéphane', atelier: 'John HICKS', sexe: 'M', famille: 4 },
  { id: 2, nom: 'AKWELI Victor Egulong Ebu', atelier: 'BULLIONISME', sexe: 'M', famille: 1 },
  { id: 3, nom: 'ALIOU Mohamadou', atelier: 'Adam SMITH', sexe: 'M', famille: 3 },
  { id: 4, nom: 'ALIOUM Youssoufa', atelier: 'David RICARDO', sexe: 'M', famille: 3 },
  { id: 5, nom: 'ANABA Noah Carole Tatiana ', atelier: 'Antoine de MONTCHRESTIEN', sexe: 'F', famille: 1 },
  { id: 6, nom: 'ANAKEU Kenne Ronael', atelier: 'François QUESNAY', sexe: 'M', famille: 2 },
  { id: 7, nom: 'ATCHOM Yah Landry', atelier: 'Vincent de GOURNAY', sexe: 'M', famille: 2 },
  { id: 8, nom: 'ATONTSA Nguetsop Ismael', atelier: 'Riquetti de MIRABEAU', sexe: 'M', famille: 2 },
  { id: 9, nom: 'BEKOUMB BEKOUMB née David', atelier: 'Thomas MALTHUS', sexe: 'M', famille: 3 },
  { id: 10, nom: 'BELLA Ariane Sonia', atelier: 'Jean Baptiste COLBERT', sexe: 'F', famille: 1 },
  { id: 11, nom: 'BOKENG Abizou Tatiana', atelier: 'Harvey HANSEN', sexe: 'F', famille: 4 },
  { id: 12, nom: 'EKAH Terence Akame', atelier: 'Milton FREDMAN', sexe: 'M', famille: 2 },
  { id: 13, nom: 'ELLA Medoua Philomène Samira', atelier: 'Jean Baptiste SAY', sexe: 'F', famille: 3 },
  { id: 14, nom: 'ETOK Doumbé Stéphanie', atelier: 'Jacques TURGOT', sexe: 'F', famille: 2 },
  { id: 15, nom: 'FRU Mbonjo Luther Black', atelier: 'James TOBIN', sexe: 'M', famille: 4 },
  { id: 16, nom: 'HAMATOUKOUR Aboubakar', atelier: 'John Maynard KEYNES', sexe: 'M', famille: 4 },
  { id: 17, nom: 'KALDJOLBE Palou Roua Daba', atelier: 'John LAW', sexe: 'M', famille: 1 },
  { id: 18, nom: 'KEPGANG Franck Hermann', atelier: 'John Stuart MILL', sexe: 'M', famille: 3 },
  { id: 19, nom: 'LERAP Mbouandi Esther Sandra', atelier: 'Edmund PHELPS', sexe: 'F', famille: 4 },
  { id: 20, nom: 'MANGOUA Nguela Joseph Therry', atelier: 'Grégorie MANKIW', sexe: 'M', famille: 4 },
  { id: 21, nom: 'MBAH Evette Nange', atelier: 'DUPONT de Nemours', sexe: 'F', famille: 2 },
  { id: 22, nom: 'METCHEBEUH Nyamya Frieda Ginette', atelier: 'Fédéric LONDON', sexe: 'F', famille: 3 },
  { id: 23, nom: 'MEWOLI Jeanne Dominique', atelier: 'Lawrence SUMMERS', sexe: 'F', famille: 4 },
  { id: 24, nom: 'MOUNDO Eyango Diane Jessica', atelier: 'Josiah CHILD', sexe: 'F', famille: 1 },
  { id: 25, nom: 'NAGONDINSE Benjamin', atelier: 'Thomas Mun', sexe: 'M', famille: 1 },
  { id: 26, nom: 'NGASSA Ngassam Uriel Sother', atelier: 'SALAMANQUE School', sexe: 'M', famille: 1 },
  { id: 27, nom: 'NJOCK Samuel', atelier: 'Joseph KITCHIN', sexe: 'M', famille: 2 },
  { id: 28, nom: 'NOMO Constant Aristide', atelier: 'Ben BERNANKE', sexe: 'M', famille: 4 },
  { id: 29, nom: 'NONTI Ekoume Eugenie', atelier: 'Frédéric BASTIAT', sexe: 'F', famille: 3 },
  { id: 30, nom: 'NSADZETSEN Leingambom Emmanuel', atelier: 'George STIGLER', sexe: 'M', famille: 4 },
  { id: 31, nom: 'NSOCK Sidoine', atelier: 'Thomas MORE', sexe: 'M', famille: 1 },
  { id: 32, nom: 'OWONA Onguene Luc Hervé', atelier: 'Etiene CONDILLAC', sexe: 'M', famille: 3 },
  { id: 33, nom: 'PAGUELE Fabien', atelier: 'Tommaso CAMPANELLA', sexe: 'M', famille: 1 },
  { id: 34, nom: 'PIPPA Marie Hélène Chantal', atelier: 'Clément JUGLAR', sexe: 'F', famille: 2 },
  { id: 35, nom: 'TATUE Fotso Ernest Patrick', atelier: 'Paul KRUGMAN', sexe: 'M', famille: 4 },
  { id: 36, nom: 'TEFFO Nghogue Vincent de Paul', atelier: 'Simon KUZNETS', sexe: 'M', famille: 2 },
  { id: 37, nom: 'TIMEU Nzomo Pascal Boris', atelier: 'Jean BODIN', sexe: 'M', famille: 1 },
  { id: 38, nom: 'VANESSA Munka', atelier: 'Carl MENGER', sexe: 'F', famille: 3 },
  { id: 39, nom: 'ZAME Mekondane Fabrice', atelier: 'Nikolaï KONDRATIEFF', sexe: 'M', famille: 2 },
  { id: 40, nom: 'ZANG Cyrille Armand', atelier: 'Jeremy BENTHAM', sexe: 'M', famille: 3 }
]

const FamilleList = [
  { id: 1, nom: 'MERCANTILISTES', couleur: 'yellow' },
  { id: 2, nom: 'PHYSIOCRATES', couleur: 'green' },
  { id: 3, nom: 'CLASSIQUES', couleur: 'blue' },
  { id: 4, nom: 'KEYNESIENS', couleur: 'red' },
]

@Injectable()
export class StorageService {
    
  private GAME_STATUS_KEY : string = 'gamestatus';
  private CURRENT_M1_KEY : string = 'currentm1';
  private M1_ARRAY_KEY : string = 'arraym1';
  private M2_ARRAY_KEY : string = 'arraym2';
  private FAMILLE_ARRAY_KEY : string = 'arrayfamille';
  private RESULT_KEY : string = 'arrayresult';

  constructor() {
    if (!this.isInit) {
      this.reset();
    }
  }

  private get isInit(): boolean {
    return !!localStorage.getItem(this.GAME_STATUS_KEY) 
      && !!localStorage.getItem(this.CURRENT_M1_KEY)
      && !!localStorage.getItem(this.RESULT_KEY)
      && !!localStorage.getItem(this.M1_ARRAY_KEY)
      && !!localStorage.getItem(this.M2_ARRAY_KEY)
      && !!localStorage.getItem(this.FAMILLE_ARRAY_KEY);
  }
  
  public get currentM1(): number {
    return !!localStorage.getItem(this.CURRENT_M1_KEY) ? +localStorage.getItem(this.CURRENT_M1_KEY) : 0;
  }

  public set currentM1(indice : number) {
    localStorage.setItem(this.CURRENT_M1_KEY, JSON.stringify(indice));
  }

  public get gameStatus() : number {
    return !!localStorage.getItem(this.GAME_STATUS_KEY) ? +localStorage.getItem(this.GAME_STATUS_KEY) : -1;
  }

  public set gameStatus(status : number) {
    localStorage.setItem(this.GAME_STATUS_KEY, JSON.stringify(status));
  }

  public get EtudiantM1List() : EtudiantM1[] {
    return !!localStorage.getItem(this.M1_ARRAY_KEY) ? JSON.parse(localStorage.getItem(this.M1_ARRAY_KEY)) : [];
  }

  public get EtudiantM2List() : EtudiantM2[] {
    return !!localStorage.getItem(this.M2_ARRAY_KEY) ? JSON.parse(localStorage.getItem(this.M2_ARRAY_KEY)) : [];
  }

  public get FamilleList() : Famille[] {
    return !!localStorage.getItem(this.FAMILLE_ARRAY_KEY) ? JSON.parse(localStorage.getItem(this.FAMILLE_ARRAY_KEY)) : [];    
  }

  public reset() : void {
    localStorage.removeItem(this.CURRENT_M1_KEY);
    localStorage.removeItem(this.GAME_STATUS_KEY);
    localStorage.removeItem(this.M1_ARRAY_KEY);
    localStorage.removeItem(this.M2_ARRAY_KEY);
    localStorage.removeItem(this.FAMILLE_ARRAY_KEY);
    localStorage.removeItem(this.RESULT_KEY);

    localStorage.setItem(this.CURRENT_M1_KEY, JSON.stringify(0));
    localStorage.setItem(this.RESULT_KEY, JSON.stringify([]));
    localStorage.setItem(this.M1_ARRAY_KEY, JSON.stringify(M1List));
    localStorage.setItem(this.M2_ARRAY_KEY, JSON.stringify(M2List));
    localStorage.setItem(this.FAMILLE_ARRAY_KEY, JSON.stringify(FamilleList));
    localStorage.setItem(this.GAME_STATUS_KEY, JSON.stringify(0));
  }

  public updateResultArray(m1Id : string, m2Id : string) : void {
  }

}