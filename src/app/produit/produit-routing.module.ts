import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {OneProduitComponent} from "./one-produit/one-produit.component";
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  {path:'', component:ListProduitComponent},
  {path: 'prod/:id', component: OneProduitComponent},
  {path:'panier/:id', component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
