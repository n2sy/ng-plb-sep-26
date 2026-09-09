export class Candidat {
  constructor(
    public _id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string,
  ) {}
}

// Méthode classique
// class Candidat {
//   private id: string;
//   public prenom: string;
//   public nom: string;

//   constructor(id: string, prenom: string, nom: string) {
//     this.id = id;
//     this.prenom = prenom;
//     this.nom = nom;
//   }
// }
