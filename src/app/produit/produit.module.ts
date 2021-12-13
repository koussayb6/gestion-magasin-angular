import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import {FormsModule} from "@angular/forms";
import { ListRayonComponent } from './list-rayon/list-rayon.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    ListProduitComponent,
    EditProduitComponent,
    ListRayonComponent
  ],
    imports: [
        CommonModule,
        ProduitRoutingModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class ProduitModule { }
