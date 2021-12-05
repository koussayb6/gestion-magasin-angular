import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockModule} from "./stock/stock.module";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'stocks',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => StockModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
