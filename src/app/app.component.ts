import {Component, OnInit} from '@angular/core';
import {PanierService} from "./produit/panier.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'gestion-magasin-angular';

  nbrNotif!:any ;
  countNotif(event:any){
    this.nbrNotif=event;
  }


}
