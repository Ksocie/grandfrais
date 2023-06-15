import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneListComponent} from './personne-list/personne-list.component';
import { ModifierPersonneComponent } from './personne/modifier-personne/modifier-personne.component';
import { ToolbarModule } from "primeng/toolbar";

const routes: Routes = [
  { path: 'all', component: PersonneListComponent},
  {path :'modifier-personne/:id', component:ModifierPersonneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
