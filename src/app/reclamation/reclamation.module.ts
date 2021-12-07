import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import {StockRoutingModule} from "../stock/stock-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListReclamationComponent,
    AddReclamationComponent,
    EditReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule
  ]
})
export class ReclamationModule { }
