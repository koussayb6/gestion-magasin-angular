import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStockComponent} from "./list-stock/list-stock.component";
import {EditStockComponent} from "./edit-stock/edit-stock.component";
import {AddStockComponent} from "./add-stock/add-stock.component";

const routes: Routes = [
  {path:'', component:ListStockComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
