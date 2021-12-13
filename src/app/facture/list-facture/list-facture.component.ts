import { Component, OnInit } from '@angular/core';
import {Stock} from "../../stock/Stock";
import {Produit} from "../../stock/Produit";
import {StockService} from "../../stock/stock.service";
import {DetailFacture} from "../DetailFacture";
import {Facture} from "../Facture";
import {FactureService} from "../facture.service";

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {

  factures!:Facture[];
  detailFactures!:DetailFacture[];
  show:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  facture!:Facture;
  constructor(private servcefacture:FactureService) { }

  ngOnInit(): void {
    this.servcefacture.getAll().subscribe((resultat)=>{
        console.log(resultat);
        this.factures=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );

  }
  add(){
    this.show=true;
  }
  addStock(facture:any){
    this.factures.push(facture);
    this.show=false;
    this.servcefacture.addFacture(facture, 2).subscribe((resultat)=>{
        console.log(resultat);
        //this.stocks=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );

  }
  addFacturetest(){
    let facture= new Facture();
    let produit= new Produit();
    produit.idProduit=1;
    let detail= new DetailFacture();
    detail.qte=10;
    detail.pourcentageRemise=10;
    detail.produit=produit;
    facture.detailFactures.push(detail);
    this.servcefacture.addFacture(facture, 2).subscribe((resultat)=>{
        console.log(resultat);
        //this.stocks=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

  cancel(facture:Facture){
    var result=confirm("sure?");
    if(result){
      //this.invoices.splice(index);
      this.servcefacture.cancelFacture(facture).subscribe(
        () => this.factures = this.factures.filter(e => e.idFacture != facture.idFacture),
      );}
  }
 /* update(stock:any){
    this.show2=true;
    this.stock=stock;

  }
  updateStock(stock:any){
    this.serviceStock.updateStock(stock).subscribe();
    this.show2=false;
  }*/
  showProducts(facture:Facture){
    this.show3=true;
    this.detailFactures=facture.detailFactures;
  }

}
