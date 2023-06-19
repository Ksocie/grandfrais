import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [
      //   RouterTestingModule
      // ],
      imports: [MenubarModule , RouterTestingModule],
      declarations: [
        AppComponent
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Le test "should create the app"  vérifie que l' instance AppComponent est créée avec succès.
  //Il garantit que le composant est créé sans aucune erreur.
  it('Doit créer l application', () => {
    expect(component).toBeTruthy();
  });

  //Le  test "should initialize the items array" vérifie si la propriété items
  //dans AppComponent est initialisée correctement.
  //Nous définissons le tableau d' MenuItemobjets attendu et le comparons
  //à la valeur réelle de component.items.
  it('Doit initialiser le tableau des éléments', () => {
    const expectedItems: MenuItem[] = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Personne',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Liste des utilisateurs',
            icon: 'pi pi-fw pi-users',
            routerLink: '/all',
          },
        ],
      },
    ];
    expect(component.items).toEqual(expectedItems);
  });


});
