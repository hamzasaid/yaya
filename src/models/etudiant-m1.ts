export class EtudiantM1 {
  id: number;
  nom: string;
  sexe: string;

  constructor(obj: EtudiantM1 = {} as EtudiantM1) {
    let {
      id = 0,
      nom = '',
      sexe = '',
    } = obj;

    this.id = id;
    this.nom = nom;
    this.sexe = sexe;
  }

  public get avatar(): string { return 'assets/img/M1' + ('00' + this.id).slice(-3) + this.sexe + '.jpg'; }

}