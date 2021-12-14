import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  {path:'', component:ListProduitComponent},
  {path:'panier', component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
