import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddActionComponent } from './GestionAction/add-action/add-action.component';
import { EditActionComponent } from './GestionAction/edit-action/edit-action.component';
import { ListeActionComponent } from './GestionAction/liste-action/liste-action.component';
import { ShowActionComponent } from './GestionAction/show-action/show-action.component';


const routes: Routes = [
  {path:"home", component:AppComponent},
  {path:"action/listaction", component:ListeActionComponent},
  {path:"action/show/:id", component:ShowActionComponent},
  {path:"action/add", component:AddActionComponent},
  {path:"action/edit/:id", component:EditActionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
