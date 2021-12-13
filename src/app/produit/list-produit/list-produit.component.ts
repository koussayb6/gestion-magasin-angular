import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../produit.service";
import {Produit} from "../Produit";
import {Stock} from "../../stock/Stock";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits!:Produit[];
  produit!:Produit;
  showEdit:boolean=false;
  stock!:Stock;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  constructor(private serviceProd:ProduitService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.serviceProd.getAll().subscribe((resultat)=>{
        console.log(resultat);

        this.produits=resultat;

      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAll();
  }

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAll();
  }
  addProduit(event:any){
    let close= document.getElementById("close")
    close?.click()
    console.log(event[0]);
    let idstock= event[3].idStock;
    let idrayon= event[2].idRayon;
    let data= new FormData();

    data.append('p', JSON.stringify(event[0]));
    data.append('file', event[1]);
    data.append('cat', event[4].categorieProduit);
    this.serviceProd.addProduit(data,idstock,idrayon).subscribe((resultat)=>{
        console.log(resultat);
        this.produits.unshift(resultat);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }
  update(produit:any){
    this.showEdit=true;
    this.produit=produit;

  }
  updateProduit(event:any){
    let close= document.getElementById("close")
    close?.click()
    let idstock= event[3].idStock;
    let idrayon= event[2].idRayon;
    let data= new FormData();

    data.append('p', JSON.stringify(event[0]));
    data.append('file', event[1]);
    data.append('id', this.produit.idProduit.toString());
    data.append('cat', event[4].categorieProduit);
    this.serviceProd.updateProduit(data,idstock,idrayon).subscribe((resultat)=>{
        console.log(resultat);

      },
      (error)=>{
        console.log(error.status)
      }
    );

    this.showEdit=false;
  }
  delete(produit:Produit){
    var result=confirm("sure?");
    if(result){
      //this.invoices.splice(index);
      this.serviceProd.deleteProduit(produit).subscribe(
        () => this.produits = this.produits.filter(e => e.idProduit != produit.idProduit),
      );}
  }
}
