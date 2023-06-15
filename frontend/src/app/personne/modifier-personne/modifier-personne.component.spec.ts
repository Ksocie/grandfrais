// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ModifierPersonneComponent } from './modifier-personne.component';

// describe('ModifierPersonneComponent', () => {
//   let component: ModifierPersonneComponent;
//   let fixture: ComponentFixture<ModifierPersonneComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ModifierPersonneComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ModifierPersonneComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('');
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../personne';
import { DepartementService } from 'src/app/Service/departementservice.service';
import { PersonneService } from '../personne.service';
import { ModifierPersonneComponent } from './modifier-personne.component';
import { of } from 'rxjs';

describe('ModifierPersonneComponent', () => {
  let component: ModifierPersonneComponent;
  let fixture: ComponentFixture<ModifierPersonneComponent>;
  let mockPersonneService: jasmine.SpyObj<PersonneService>;
  let mockDepartementService: jasmine.SpyObj<DepartementService>;
  let mockActivatedRoute: any;
  let mockRouter: any;

  beforeEach(async () => {
    // Creating spy objects for the services
    const mockPersonneServiceSpy = jasmine.createSpyObj('PersonneService', ['getById', 'updatePersonne']);
    const mockDepartementServiceSpy = jasmine.createSpyObj('DepartementService', ['getAllDepartement']);

    // Configuring the testing module
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ModifierPersonneComponent],
      providers: [
        FormBuilder,
        { provide: PersonneService, useValue: mockPersonneServiceSpy },
        { provide: DepartementService, useValue: mockDepartementServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } },
        { provide: Router, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    // Creating the component fixture and getting the component instance
    fixture = TestBed.createComponent(ModifierPersonneComponent);
    component = fixture.componentInstance;

    // Getting the spy objects for the services and other dependencies
    mockPersonneService = TestBed.inject(PersonneService) as jasmine.SpyObj<PersonneService>;
    mockDepartementService = TestBed.inject(DepartementService) as jasmine.SpyObj<DepartementService>;
    mockActivatedRoute = TestBed.inject(ActivatedRoute);
    mockRouter = TestBed.inject(Router);

    // Triggering change detection for the component
    fixture.detectChanges();
  });

  // it('should create the component', () => {
  //   // Asserting that the component is created
  //   expect(component).toBeTruthy();
  // });

  // it('should populate the form and fetch personne data on ngOnInit', () => {
  //   // Mock data for personne and departements
  //   const mockPersonneData = { id: 1, nom: 'John', prenom: 'Doe', age: 30, departement: 'IT' };
  //   const mockDepartements = ['IT', 'HR'];

  //   // Mocking the service methods to return mock data
  //   mockPersonneService.getById.and.returnValue(of(mockPersonneData));
  //   mockDepartementService.getAllDepartement.and.returnValue(of(mockDepartements));

  //   // Triggering the ngOnInit method
  //   component.ngOnInit();

  //   // Asserting that the service methods were called with the correct arguments
  //   expect(mockPersonneService.getById).toHaveBeenCalledWith(1);
  //   expect(mockDepartementService.getAllDepartement).toHaveBeenCalled();

  //   // Asserting that the form values are correctly populated with the fetched personne data
  //   expect(component.Form.value.nom).toBe('John');
  //   expect(component.Form.value.prenom).toBe('Doe');
  //   expect(component.Form.value.age).toBe(30);
  //   expect(component.Form.value.departement).toBe('IT');
  // });

  // ... (Other test cases can be added here)
  it('');
});
