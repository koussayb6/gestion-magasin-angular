import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import {FormsModule} from "@angular/forms";
import { ListRayonComponent } from './list-rayon/list-rayon.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { OneProduitComponent } from './one-produit/one-produit.component';


@NgModule({
  declarations: [
    ListProduitComponent,
    EditProduitComponent,
    ListRayonComponent,
    OneProduitComponent
  ],
    imports: [
        CommonModule,
        ProduitRoutingModule,
        FormsModule,
        NgxPaginationModule,
        NgxSliderModule,
        Ng2SearchPipeModule

    ]
})
export class ProduitModule { }
