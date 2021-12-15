import { Component, OnInit } from '@angular/core';
import {Stock} from "../../stock/Stock";
import {StockService} from "../../stock/stock.service";
import {DetailFacture} from "../DetailFacture";
import {Facture} from "../Facture";
import {FactureService} from "../facture.service";
import {Produit} from "../../produit/Produit";

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



  cancel(facture:Facture){
    var result=confirm("sure?");
    if(result){
      //this.invoices.splice(index);
      this.servcefacture.cancelFacture(facture).subscribe(
        () => this.factures = this.factures.filter(e => e.idFacture != facture.idFacture),
      );}
  }

  showProducts(facture:Facture){
    this.show3=true;
    this.detailFactures=facture.detailFactures;
  }

}
