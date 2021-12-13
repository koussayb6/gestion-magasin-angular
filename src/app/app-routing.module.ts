import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockModule} from "./stock/stock.module";
import {ReclamationModule} from "./reclamation/reclamation.module";
import {FactureModule} from "./facture/facture.module";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'stocks',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => StockModule)},
  {path: 'reclamations',
    loadChildren: () =>
      import('./reclamation/reclamation.module').then((m) => ReclamationModule)},
  {path: 'factures',
    loadChildren: () =>
      import('./facture/facture.module').then((m) => FactureModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
