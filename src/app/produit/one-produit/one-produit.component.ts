import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../produit.service";
import {Produit} from "../Produit";
import {PanierService} from "../panier.service";

@Component({
  selector: 'app-one-produit',
  templateUrl: './one-produit.component.html',
  styleUrls: ['./one-produit.component.css']
})
export class OneProduitComponent implements OnInit {
    idProduit!:any;
    produit!:Produit;
    qte!:any;
  constructor(private router:ActivatedRoute, private serviceProd:ProduitService, private servicePanier:PanierService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.idProduit= params.get('id');
    });
    this.serviceProd.getOne(this.idProduit).subscribe((resultat)=>{
        console.log(resultat);

        this.produit=resultat;

      },
        (error)=>{
          console.log(error.status)
        }
    );
  }
  addCart(){
    this.servicePanier.addpanier(2,this.idProduit,this.qte).subscribe((res)=>{
    });
    alert('ajouté au panier')
  }

}
