import { Personne } from './../personne/personne';
import { Component, OnChanges, OnInit } from '@angular/core';
import { PersonneService } from '../personne/personne.service'
import { FormBuilder, FormGroup, Validators} from '@angular/forms' ;
import { DepartementService } from '../Service/departementservice.service';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { Departement } from '../personne/departement';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.css']
})
export class PersonneListComponent implements OnInit {

  personnes: Personne[] = [];
  personneForm !: FormGroup ;
  selectedPersonne!: Personne[];
  productService: any;
  personneForDialog!: Personne[];
  displayDialog!: boolean;
  Delete: any;
  cols : any [] = [];
  confirmationService: any;
  selectedPersonnes: any;
  messageService: any;
  personne!: Personne;
  personneDialog!: boolean;
  submitted!: boolean;
  customerForm!: FormGroup;
  personneUpdateDialog!: boolean;
  personneUpdateForm!: FormGroup;
  filteredCountries!: any[];
  departement!: Departement[];
  id: any;
  route: any;
  router: any;


  constructor(
    private personneService : PersonneService,private fBuilder: FormBuilder,private departementService : DepartementService,
    private config : PrimeNGConfig){}


  /*public getAllPersonne(): void {
    this.personneService.getAllPersonne().subscribe(
    (response: Personne[]) => {
      this.personnes = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
  } */


  //Afficher les utilisateurs
  public getAllPersonne(){
    this.personneService.getAllPersonne().subscribe(
    (datas) => {
      this.personnes = datas;
      console.log(datas);
    });
  }



  ngOnInit(){
    //
    this.getDepartement();
    this.getAllPersonne();
    this.trierPersonne();


    this.personneForm = this.fBuilder.group({
      departement:['',Validators.required],
      nom : [,Validators.required],
      prenom : ['',Validators.required],
      age : [0,Validators.required],

    })

    this.config.filterMatchModeOptions = {
      text: [],
      numeric: [
          FilterMatchMode.LESS_THAN,
          FilterMatchMode.GREATER_THAN,
      ],
      date: []
    }
  }


  trierPersonne(){
    this.cols = [
      {field : "nom", header : "Nom"},
      {field : "age", header : "Age"},
    ];

  }

  getDepartement(){
    this.departementService.getAllDepartement().subscribe({
      next : (res :any) =>{
      this.departement = res;
    },
    error : (error :any) =>{
    console.error();
    }})
  }


  // filterDepartement(event: Event) {
  //   let filtered: any[] = [];
  //   let query = event.isTrusted;

  //   for (let i = 0; i < this.departement.length; i++) {
  //       let departement = this.departement[i];
  //       filtered.push(departement);
  //   }

  //   this.filteredCountries = filtered;
  // }

  //
  showModal() {
    this.personneDialog = true;
  }

  remove(){}
  //
  onSubmit() {
    // let p =this.personneForm.value
    // p.id = this.personne.id
    // p.nom=this.personne.nom
    // p.prenom=this.personne.prenom
    // p.id
    // const data = {p.id,p.nom,}
    console.log(this.personneForm.value)

    this.personneService.createPersonne(this.personneForm.value).subscribe(
      (data: Personne) => {
        window.location.reload();
        //this.getAllPersonne();
        console.log(data)
      },
      (Error:any) =>{
        console.log(Error)
      }
    );
  }

  deletePersonne(id: any) {
    this.personneService.deletePersonne(id).subscribe(data =>{
      this.getAllPersonne ();
    })
  }
}



