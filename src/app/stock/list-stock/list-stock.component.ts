import { Component, OnInit } from '@angular/core';
import {StockService} from "../stock.service";
import {Stock} from "../Stock";
import {Produit} from "../../produit/Produit";

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {

  stocks!:Stock[];
  products!:Produit[];
  show:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  stock!:Stock;
  classes!:any;
  constructor(private serviceStock:StockService) { }

  ngOnInit(): void {
    this.serviceStock.getAll().subscribe((resultat)=>{
        console.log(resultat);
        this.stocks=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );

  }
  add(){
    this.show=true;
  }
  addStock(stock:any){
    this.show=false;
    console.log(stock);
    this.serviceStock.addStock(stock).subscribe((resultat)=>{
        console.log(resultat);
        this.stocks.push(resultat);
      },
      (error)=>{
        console.log(error.status)
      }
    );
    let close=document.getElementById("close");
    close?.click();

  }

  delete(stock:Stock){
    var result=confirm("sure?");
    if(result){
      //this.invoices.splice(index);
      this.serviceStock.deleteStock(stock).subscribe(
        () => this.stocks = this.stocks.filter(e => e.idStock != stock.idStock),
      );}
  }
  update(stock:any){
    this.show2=true;
    this.stock=stock;

  }
  updateStock(stock:Stock){
    stock.idStock=this.stock.idStock;
    this.serviceStock.updateStock(stock).subscribe();
    let close=document.getElementById("close");
    close?.click();
    this.show2=false;
  }
  showProducts(stock:Stock){
    this.show3=true;
    this.products=stock.produits;
  }

  onfile(event:any){
    console.log(event.target.files[0])
  }

}
