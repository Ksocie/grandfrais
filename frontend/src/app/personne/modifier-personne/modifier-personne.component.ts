import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonneService } from '../personne.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../personne';
import { DepartementService } from 'src/app/Service/departementservice.service';

@Component({
  selector: 'app-modifier-personne',
  templateUrl: './modifier-personne.component.html',
  styleUrls: ['./modifier-personne.component.css']
})
export class ModifierPersonneComponent {
  Form!: FormGroup;
  id !: number;
  personnes !: Personne[];
  departement: any;
  filteredCountries!: any[];


  constructor(
    private formBuilder: FormBuilder,
    private personneService: PersonneService,
    private departementService: DepartementService,
    private route: ActivatedRoute,
    private routes: Router
  ) { }


  ngOnInit() {
    this.Form = this.formBuilder.group({
      nom: ['',
        [Validators.required]
      ],
      prenom: ['',
        [Validators.required]
      ],
      age: ['',
        [Validators.required]
      ],
      departement: ['',
        [Validators.required]
      ]

    })
    this.getDepartement();
    this.id = this.route.snapshot.params['id'];
    this.personneService.getById(this.id).subscribe((data: any) => {
      let personne = new Personne(this.id,data.nom,data.prenom,data.age,data.departement.designation);
      this.Form.patchValue(personne);
      (error: any) => {
        console.log(error)
      }
    })


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

  filterPersonne(event: Event) {
    let filtered: any[] = [];
    let query = event.isTrusted;

    for (let i = 0; i < this.personnes.length; i++) {
        let personne = this.personnes[i];
        filtered.push(personne);
    }

    this.filteredCountries = filtered;
  }

  onUpdate() {
    const personne = new Personne(this.id,this.Form.value.nom,this.Form.value.prenom,this.Form.value.age,this.Form.value.departement)
    this.personneService.updatePersonne(this.id, personne).subscribe((data: any)=>{
      this.routes.navigate(['/all'])
    })
  }

  /*deletePersonne(id: any) {
    this.personneService.delete(id).subscribe(data =>{
      this.router.navigate(['/listepersonne'])
      this.lister();
    })
    }*/
}
