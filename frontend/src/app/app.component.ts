import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from "primeng/toolbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  items!: MenuItem[];
  ngOnInit(){
    this.items = [
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
                              routerLink:"/all"
                          }
                      ]
                  },
                ];
  }
}


