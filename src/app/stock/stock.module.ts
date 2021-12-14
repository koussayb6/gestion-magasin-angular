import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { ListStockComponent } from './list-stock/list-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListStockComponent,
    AddStockComponent,
    EditStockComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule
  ]
})
export class StockModule { }
