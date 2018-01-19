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

}