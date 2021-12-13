import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockModule} from "./stock/stock.module";
import {ProduitModule} from "./produit/produit.module";
import {FournisseurRoutingModule} from "./fournisseur/fournisseur-routing.module";
import {FournisseurModule} from "./fournisseur/fournisseur.module";
import {ReclamationModule} from "./reclamation/reclamation.module";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'stocks',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => StockModule)},
  {path: 'produits',
    loadChildren: () =>
      import('./produit/produit.module').then((m) => ProduitModule)},
  {path: 'fournisseurs',
    loadChildren: () =>
      import('./fournisseur/fournisseur.module').then((m) => FournisseurModule)},

  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'reclamations',
    loadChildren: () =>
      import('./reclamation/reclamation.module').then((m) => ReclamationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
