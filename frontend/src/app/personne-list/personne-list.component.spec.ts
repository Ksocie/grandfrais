import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Personne } from './../personne/personne';
import { PersonneListComponent } from './personne-list.component';
import { PersonneService } from '../personne/personne.service';
import { DepartementService } from '../Service/departementservice.service';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { of } from 'rxjs';
import { Departement } from '../personne/departement';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PersonneListComponent', () => {
  let component: PersonneListComponent;
  let fixture: ComponentFixture<PersonneListComponent>;
  const mockPersonneService = jasmine.createSpyObj('PersonneService', ['getAllPersonne', 'createPersonne','getById','updatePersonne','deletePersonne']);
  const mockDepartementService = jasmine.createSpyObj('DepartementService', ['getAllDepartement']);

  let formBuilder: FormBuilder;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PersonneListComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        DialogModule
      ],
      providers: [
        { provide: PersonneService ,  useValue: mockPersonneService},
        { provide: DepartementService , useValue: mockDepartementService},
        { provide: FormBuilder },
        { provide: PrimeNGConfig},
        { provide: MessageService},
        { provide: ConfirmationService}
      ],
			schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneListComponent);
    component = fixture.componentInstance;
    component.personneForm = new FormGroup({
      departement: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      age: new FormControl(0),
    });

    // Initialisation de la proprité personneForm
    // component.personneForm = formBuilder.group({
    //   departement: '',
    //   nom: '',
    //   prenom: '',
    //   age: 0
    // });

  });


  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('Doit récupérer toutes les personnes lors de l initialisation', () => {
  //   const personnes: Personne [] = [
  //     new Personne(1,'kinhon','jean',19,'IT'),
  //     new Personne(2,'kouakou','wilfrieed',25,'HR'),
  //     new Personne(3,'diomande','jean',19,'Finance')
  //   ];

  //   spyOn(mockPersonneService, 'getAllPersonne').and.returnValue(of(personnes));

  //   // component.ngOnInit();

  //   expect(mockPersonneService.getAllPersonne).toHaveBeenCalled();
  //   expect(component.personnes).toEqual(personnes);
  // });

  // it('Doit récupérer toutes les departements lors de l initialisation', () => {
  //   const departements: Departement[] = [
  //     new Departement(1, 'IT'),
  //     new Departement(2, 'HR'),
  //     new Departement(3, 'Finance')
  //   ];

  //   spyOn(mockDepartementService, 'getAllDepartement').and.returnValue(of(departements));

  //   // component.ngOnInit();

  //   expect(mockDepartementService.getAllDepartement).toHaveBeenCalled();
  //   expect(component.departement).toEqual(departements);
  // });

  // it('devrait créer une nouvelle personne lors de l envoi du formulaire', () => {
  //   const personneFormValue = {
  //     departement: 'Sample Departement',
  //     nom: 'Sample Nom',
  //     prenom: 'Sample Prenom',
  //     age: 25
  //   };

  //   // spyOn(mockPersonneService, 'createPersonne').and.returnValue(of({}));

  //   // component.personneForm.setValue(personneFormValue);

  //   component.onSubmit();

  //   expect(mockPersonneService.createPersonne).toHaveBeenCalledWith(personneFormValue);

  // });

  it('Devrait supprimer une personne', () => {
    const Id = 1;
    mockPersonneService.deletePersonne.and.returnValue(of(null));
    // spyOn(mockPersonneService, 'deletePersonne').and.returnValue(of({}));
    spyOn(component, 'getAllPersonne');

    // WHEN
    component.deletePersonne(Id);

    // THEN
    expect(mockPersonneService.deletePersonne).toHaveBeenCalledWith(Id);
    expect(component.getAllPersonne).toHaveBeenCalled();
  });



});
