export class Famille {
  id: number;
  nom: string;
  couleur: string;

  constructor(obj: Famille = {} as Famille) {
    let {
      id = 0,
      nom = '',
      couleur = ''
    } = obj;

    this.id = id;
    this.nom = nom;
    this.couleur = couleur;
  }

  public getJSON(): any {
    return {
      id: this.id,
      nom: this.nom,
      couleur: this.couleur
    };
  }

}