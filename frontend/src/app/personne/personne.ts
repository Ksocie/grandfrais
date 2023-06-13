export class Personne {
  id?: number;
  nom?: string;
  prenom?: string;
  age?: number;
  departement?:string;

  constructor(id:number,nom:string, prenom:string, age:number,departement: string){
    this.id= id;
    this.nom = nom;
    this.prenom = prenom;
    this.age =  age;
    this.departement = departement;
  }
}

