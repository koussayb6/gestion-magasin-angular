import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStockComponent} from "../stock/list-stock/list-stock.component";
import {ListReclamationComponent} from "./list-reclamation/list-reclamation.component";

const routes: Routes = [
  {path:'', component:ListReclamationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
