import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockModule } from './stock/stock.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ProduitModule } from './produit/produit.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import {NgxPaginationModule} from "ngx-pagination";
import { ReclamationModule } from './reclamation/reclamation.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FactureModule } from './facture/facture.module';

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StockModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        ProduitModule,
        ReclamationModule,
        NotificationsModule,
        FactureModule,
        FournisseurModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
