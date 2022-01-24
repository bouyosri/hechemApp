import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddActionComponent } from './GestionAction/add-action/add-action.component';
import { EditActionComponent } from './GestionAction/edit-action/edit-action.component';
import { ListeActionComponent } from './GestionAction/liste-action/liste-action.component';
import { ShowActionComponent } from './GestionAction/show-action/show-action.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AddActionComponent,
    EditActionComponent,
    ListeActionComponent,
    ShowActionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
