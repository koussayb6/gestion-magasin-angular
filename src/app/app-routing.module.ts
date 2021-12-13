import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockModule} from "./stock/stock.module";
import {ReclamationModule} from "./reclamation/reclamation.module";
import {NotificationsModule} from "./notifications/notifications.module";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'stocks',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => StockModule)},
  {path:'', redirectTo:'home',pathMatch:'full'},
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
