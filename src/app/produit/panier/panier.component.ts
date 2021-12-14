import { Component, OnInit } from '@angular/core';
import {Panier} from "../Panier";
import {PanierService} from "../panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  paniers!:Panier[];
  panier!:Panier;
  show:boolean=false;

  constructor(private servicepanier:PanierService) { }

  ngOnInit(): void {
    this.servicepanier.getAllpanier(2).subscribe((resultat)=>{
        console.log(resultat);
        this.paniers=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  add(){
    this.show=true;
  }
  addpanier(panier:any){
    this.show=false;
    console.log(panier);
    this.servicepanier.addpanier(2,2,1).subscribe((resultat)=>{
        console.log(resultat);
        this.paniers.push(resultat);
      },
      (error)=>{
        console.log(error.status)
      }
    );
    let close=document.getElementById("close");
    close?.click();

  }

}
