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

  public get avatar(): string { return 'M1' + ('00' + this.id).slice(-3); }

  public getJSON(): any {
    return {
      id: this.id,
      nom: this.nom,
      sexe: this.sexe
    };
  }

}