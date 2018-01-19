import { EtudiantM1 } from './etudiant-m1';
import { EtudiantM2 } from './etudiant-m2';

export class Atelier {
  parrain: EtudiantM2;
  filleuls: EtudiantM1[];

  constructor(obj: Atelier = {} as Atelier) {
    let {
      parrain = new EtudiantM2(),
      filleuls = [],
    } = obj;

    this.parrain = parrain;
    this.filleuls = filleuls;
  }

  public get title() : string { return this.parrain.atelier; }

  public get familyId() : number { return this.parrain.famille; }

}