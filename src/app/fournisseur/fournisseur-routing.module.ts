import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListFournisseurComponent} from "./list-fournisseur/list-fournisseur.component";

const routes: Routes = [
  {path:'', component:ListFournisseurComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
