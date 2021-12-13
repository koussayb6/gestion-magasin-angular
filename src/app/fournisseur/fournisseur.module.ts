import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListFournisseurComponent,
    EditFournisseurComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    FormsModule
  ]
})
export class FournisseurModule { }
