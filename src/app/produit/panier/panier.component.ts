import { Component, OnInit } from '@angular/core';
import {Panier} from "../Panier";
import {PanierService} from "../panier.service";
import {ActivatedRoute} from "@angular/router";
import {Facture} from "../../facture/Facture";
import {Produit} from "../Produit";
import {DetailFacture} from "../../facture/DetailFacture";
import {FactureService} from "../../facture/facture.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  paniers!:Panier[];
  panier!:Panier;
  idClient!:any;
  show:boolean=false;
  code:any="";
  constructor(private router:ActivatedRoute, private servicepanier:PanierService, private serviceFacture:FactureService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.idClient= params.get('id');
    });
    this.getAll()
  }
  getAll(){
    this.servicepanier.getAllpanier(this.idClient).subscribe((resultat)=>{
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
  modifierstatus(panier:Panier, status:any){
  this.servicepanier.modifierstatus(status,panier).subscribe();
  this.getAll()
  }
  addFacturetest(){
    let facture= new Facture();

    this.paniers.forEach(function (value){
      let produit= new Produit();
      produit.idProduit=value.produit.idProduit;
      let detail= new DetailFacture();
      detail.qte=value.quantite;
      detail.pourcentageRemise=0;
      detail.produit=value.produit;
      facture.detailFactures.push(detail);
    });

    this.serviceFacture.addFacture(facture, 2,this.code).subscribe((resultat)=>{
        console.log(resultat);
        //this.stocks=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  setCode(event:any){
    this.code=event.code;
  }

}
