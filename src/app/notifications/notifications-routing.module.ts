import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStockComponent} from "../stock/list-stock/list-stock.component";
import {ListNotificationsComponent} from "./list-notifications/list-notifications.component";

const routes: Routes = [
  {path:'', component:ListNotificationsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
