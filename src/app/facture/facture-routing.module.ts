import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListReclamationComponent} from "../reclamation/list-reclamation/list-reclamation.component";
import {ListFactureComponent} from "./list-facture/list-facture.component";

const routes: Routes = [
  {path:'', component:ListFactureComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
