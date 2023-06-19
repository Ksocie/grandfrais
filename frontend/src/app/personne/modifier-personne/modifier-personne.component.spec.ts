// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Personne } from '../personne';
// import { DepartementService } from 'src/app/Service/departementservice.service';
// import { PersonneService } from '../personne.service';
// import { ModifierPersonneComponent } from './modifier-personne.component';
// import { of } from 'rxjs';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { BrowserModule } from '@angular/platform-browser';
// import { MenubarModule } from 'primeng/menubar';
// import { AppRoutingModule } from 'src/app/app-routing.module';
// import { ToolbarModule } from 'primeng/toolbar';
// import { DialogModule } from 'primeng/dialog';
// import { ToastModule } from 'primeng/toast';
// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';
// import { TableModule } from 'primeng/table';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DropdownModule } from 'primeng/dropdown';
// import { RouterTestingModule } from '@angular/router/testing';


// describe('ModifierPersonneComponent', () => {
//   let component: ModifierPersonneComponent;
//   let fixture: ComponentFixture<ModifierPersonneComponent>;
//   let mockPersonneService: jasmine.SpyObj<PersonneService>;
//   let mockDepartementService: jasmine.SpyObj<DepartementService>;
//   let mockActivatedRoute: any;
//   let mockRouter: any;
//   mockPersonneService = jasmine.createSpyObj('PersonneService', ['getById' ,'updatePersonne']);
//   mockDepartementService = jasmine.createSpyObj('DepartementService', ['getAllDepartement', 'subscribe']);

//   beforeEach(async () => {
//     // Creating spy objects for the services


//     TestBed.configureTestingModule({
//       imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule,
//         BrowserModule,
//         AppRoutingModule,
//         MenubarModule,
//         TableModule,
//         DialogModule,
//         ToolbarModule,
//         ToastModule,
//         ButtonModule,
//         InputTextModule,
//         InputTextareaModule,
//         FormsModule,
//         ReactiveFormsModule,
//         BrowserAnimationsModule,
//         DropdownModule,
//         RouterTestingModule
//       ],
//       declarations: [ModifierPersonneComponent],
//       providers: [
//         FormBuilder,
//         { provide: PersonneService, useValue: mockPersonneService },
//         { provide: DepartementService, useValue: mockDepartementService },
//         { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } },
//         { provide: Router, useValue: {} }
//       ]
//     })

//   });

//   beforeEach(() => {
//     // Creating the component fixture and getting the component instance
//     fixture = TestBed.createComponent(ModifierPersonneComponent);
//     component = fixture.componentInstance;

//     // Obtention des objets spy pour les services et autres dépendances
//     // mockPersonneService = TestBed.inject(PersonneService) as jasmine.SpyObj<PersonneService>;
//     // mockDepartementService = TestBed.inject(DepartementService) as jasmine.SpyObj<DepartementService>;
//     // mockActivatedRoute = TestBed.inject(ActivatedRoute);
//     // mockRouter = TestBed.inject(Router);

//     // Triggering change detection for the component

//   });

//   it('should create the component', () => {
//     // fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });

//   it('should populate the form and fetch personne data on ngOnInit', () => {
//     // Mock data for personne and departements
//     const mockPersonneData = { id: 1, nom: 'John', prenom: 'Doe', age: 30, departement: 'IT' };
//     const mockDepartements = ['IT', 'HR'];

//     // Mocking the service methods to return mock data
//     mockPersonneService.getById.and.returnValue(of(mockPersonneData));
//     mockDepartementService.getAllDepartement.and.returnValue(of(mockDepartements));

//     // Déclenchement de la méthode ngOnInit
//     component.ngOnInit();

//     // Vérification que les méthodes de service ont été appelées avec les bons arguments
//     expect(mockPersonneService.getById).toHaveBeenCalledWith(1);
//     expect(mockDepartementService.getAllDepartement).toHaveBeenCalled();

//     // Vérifier que les valeurs du formulaire sont correctement
//     // remplies avec les données personnelles récupérées.
//     expect(component.Form.value.nom).toBe('John');
//     expect(component.Form.value.prenom).toBe('Doe');
//     expect(component.Form.value.age).toBe(30);
//     expect(component.Form.value.departement).toBe('IT');
//   });



// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DepartementService } from 'src/app/Service/departementservice.service';
import { PersonneService } from '../personne.service';
import { Personne } from '../personne';
import { ModifierPersonneComponent } from './modifier-personne.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModifierPersonneComponent', () => {
  let component: ModifierPersonneComponent;
  let fixture: ComponentFixture<ModifierPersonneComponent>;
  const mockPersonneService = jasmine.createSpyObj('PersonneService', ['getAllPersonne', 'createPersonne','getById','updatePersonne','deletePersonne']);
  const mockDepartementService = jasmine.createSpyObj('DepartementService', ['getAllDepartement']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  let formBuilder: FormBuilder;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ModifierPersonneComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule,RouterTestingModule],
      providers: [
        PersonneService,
        DepartementService,
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } },
        { provide: Router, useValue: routerSpy },
        { provide: PersonneService ,  useValue: mockPersonneService},
        { provide: DepartementService , useValue: mockDepartementService},
        { provide: FormBuilder }
      ],
			schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPersonneComponent);
    component = fixture.componentInstance;


    // Créer un objet espion pour la méthode de navigation du routeur


    // route = TestBed.inject(ActivatedRoute);
    // router = TestBed.inject(Router);
    // formBuilder = TestBed.inject(FormBuilder);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('doit récupérer la personne par l identifiant et les valeurs du formulaire de patch lors de l initialisation', () => {
    const mockPersonne: Personne = {
      id: 1,
      nom: 'John',
      prenom: 'Doe',
      age: 30,
      departement: 'IT',
    };

    spyOn(mockPersonneService, 'getById').and.returnValue(of(mockPersonne));
    spyOn(formBuilder, 'group').and.callThrough();

    component.ngOnInit();

    expect(mockPersonneService.getById).toHaveBeenCalledWith(1);
    expect(formBuilder.group).toHaveBeenCalled();
    expect(component.Form.value).toEqual(mockPersonne);
  });

  // it('should retrieve departements on initialization', () => {
  //   const mockDepartements = ['IT', 'HR', 'Finance'];

  //   spyOn(departementService, 'getAllDepartement').and.returnValue(of(mockDepartements));

  //   component.ngOnInit();

  //   expect(departementService.getAllDepartement).toHaveBeenCalled();
  //   expect(component.departement).toEqual(mockDepartements);
  // });

  // it('should update personne and navigate to /all on form submission', () => {
  //   const router = TestBed.inject(Router);
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


  //   // spyOn(mockPersonneService, 'updatePersonne').and.returnValue(of({}));
  //   mockPersonneService.updatePersonne.and.returnValue(of({}));
  //   // spyOn(router, 'navigate');

  //   // component.Form = formBuilder.group({
  //   //   nom: '',
  //   //   prenom: '',
  //   //   âge: 0,
  //   //   département: '',
  //   // });
  //   component.Form = new FormGroup({
  //     departement: new FormControl(''),
  //     nom: new FormControl(''),
  //     prenom: new FormControl(''),
  //     age: new FormControl(0),
  //   });

  //   component.Form.patchValue(mockFormValue);
  //   component.id = 1;
  //   component.onUpdate();

  //   expect(mockPersonneService.updatePersonne).toHaveBeenCalledWith(1, mockFormValue);
  //   expect(router.navigate).toHaveBeenCalledWith(['/all']);
  // });


});
