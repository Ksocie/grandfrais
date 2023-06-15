// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PersonneListComponent } from './personne-list.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { PersonneService } from '../personne/personne.service';
// import { DepartementService } from '../Service/departementservice.service';

// describe('PersonneListComponent', () => {
//   let component: PersonneListComponent;
//   let fixture: ComponentFixture<PersonneListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ PersonneListComponent ],
//       imports: [ReactiveFormsModule,HttpClientTestingModule],
//       providers: [
//         PersonneService,
//         DepartementService
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(PersonneListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     // Asserting that the component is created
//     expect(PersonneListComponent).toBeTruthy();
//   });
//   it('');
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DepartementService } from 'src/app/Service/departementservice.service';
import { ModifierPersonneComponent } from '../personne/modifier-personne/modifier-personne.component';
import { PersonneService } from '../personne/personne.service';
import { Personne } from '../personne/personne';


describe('ModifierPersonneComponent', () => {
  let component: ModifierPersonneComponent;
  let fixture: ComponentFixture<ModifierPersonneComponent>;
  let personneService: PersonneService;
  let departementService: DepartementService;
  let route: ActivatedRoute;
  let router: Router;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierPersonneComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [
        PersonneService,
        DepartementService,
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } },
        { provide: Router, useValue: {} },
        FormBuilder,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPersonneComponent);
    component = fixture.componentInstance;
    personneService = TestBed.inject(PersonneService);
    departementService = TestBed.inject(DepartementService);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    formBuilder = TestBed.inject(FormBuilder);

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Doit récupérer la personne par l identifiant et les valeurs du formulaire de patch lors de l initialisation', () => {
    const mockPersonne: Personne = {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      age: 30,
      departement: 'IT',
    };

    spyOn(personneService, 'getById').and.returnValue(of(mockPersonne));
    spyOn(formBuilder, 'group').and.callThrough();

    component.ngOnInit();

    expect(personneService.getById).toHaveBeenCalledWith(1);
    expect(formBuilder.group).toHaveBeenCalled();
    //expect(component.Form.value).toEqual(mockPersonne);
  });

  it('should retrieve departements on initialization', () => {
    const mockDepartements = ['IT', 'HR', 'Finance'];

    spyOn(departementService, 'getAllDepartement').and.returnValue(of(mockDepartements));

    component.ngOnInit();

    expect(departementService.getAllDepartement).toHaveBeenCalled();
    expect(component.departement).toEqual(mockDepartements);
  });

  // it('should update personne and navigate to /all on form submission', () => {
  //   const mockPersonne: Personne = {
  //     id: 1,
  //     nom: 'John',
  //     prenom: 'Doe',
  //     age: 30,
  //     departement: 'IT',
  //   };
  //   const mockFormValue = {
  //     nom: 'Updated John',
  //     prenom: 'Updated Doe',
  //     age: 35,
  //     departement: 'Updated IT',
  //   };

  //   spyOn(personneService, 'updatePersonne').and.returnValue(of({}));
  //   spyOn(router, 'navigate');

  //   component.Form = formBuilder.group({
  //     nom: '',
  //     prenom: '',
  //     âge: '',
  //     département: '',
  //   });

  //   component.Form.patchValue(mockFormValue);
  //   component.id = 1;
  //   component.onUpdate();

  //   expect(personneService.updatePersonne).toHaveBeenCalledWith(1, mockFormValue);
  //   expect(router.navigate).toHaveBeenCalledWith(['/all']);
  // });

  // Add more test cases as needed for your component's functionality
});
