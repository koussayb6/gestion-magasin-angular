import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockModule} from "./stock/stock.module";
import {ProduitModule} from "./produit/produit.module";
import {FournisseurRoutingModule} from "./fournisseur/fournisseur-routing.module";
import {FournisseurModule} from "./fournisseur/fournisseur.module";
import {ReclamationModule} from "./reclamation/reclamation.module";
import {HomeComponent} from "./home/home.component";
import {FactureModule} from "./facture/facture.module";
import {NotificationsModule} from "./notifications/notifications.module";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'stocks',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => StockModule)},
  {path: 'factures',
    loadChildren: () =>
      import('./facture/facture.module').then((m) => FactureModule)},

  {path: 'produits',
    loadChildren: () =>
      import('./produit/produit.module').then((m) => ProduitModule)},
  {path: 'fournisseurs',
    loadChildren: () =>
      import('./fournisseur/fournisseur.module').then((m) => FournisseurModule)},

  {path: 'reclamations',
    loadChildren: () =>
      import('./reclamation/reclamation.module').then((m) => ReclamationModule)},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'notifications',
    loadChildren: () =>
      import('./notifications/notifications.module').then((m) => NotificationsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
