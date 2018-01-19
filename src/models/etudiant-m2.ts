export class EtudiantM2 {
  id: number;
  nom: string;
  sexe: string;
  atelier: string;
  famille: number;

  constructor(obj: EtudiantM2 = {} as EtudiantM2) {
    let {
      id = 0,
      nom = '',
      sexe = '',
      atelier = '',
      famille = 0
    } = obj;

    this.id = id;
    this.nom = nom;
    this.sexe = sexe;
    this.atelier = atelier;
    this.famille = famille
  }

  public get avatar(): string { return 'M2' + ('00' + this.id).slice(-3); }

}