import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { EditFactureComponent } from './edit-facture/edit-facture.component';


@NgModule({
  declarations: [
    ListFactureComponent,
    EditFactureComponent
  ],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
