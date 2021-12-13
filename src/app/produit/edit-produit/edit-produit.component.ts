import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Produit} from "../Produit";
import {StockService} from "../../stock/stock.service";
import {RayonService} from "../rayon.service";
import {Rayon} from "../Rayon";
import {Stock} from "../../stock/Stock";

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  @Input() produit:Produit= new Produit();
  @Output() notif= new EventEmitter<any[]>();
  rayons!: Rayon[];
  stocks!: Stock[];
  stock!:Stock;
  rayon:Rayon=this.produit.rayon;
  categorie!:any;
  file!: any;
  imgUrl!:any;
  categories: any[] = [
    { categorieProduit: 'ALIMENTAIRE' },
    { categorieProduit: 'ELECTROMENAGER' },
    { categorieProduit: 'QUINCAILLERIE' }

  ];
  emmision: any[]=[];
  constructor( private serviceStock:StockService, private serviceRayon:RayonService) { }

  ngOnInit(): void {
   // console.log(this.stock)
    this.serviceStock.getAll().subscribe((resultat)=>{
        console.log(resultat);

        this.stocks=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );

    this.serviceRayon.getAll().subscribe((resultat)=>{
        //console.log(resultat);

        this.rayons=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

  setStock(event:any){
    console.log(event)
    this.stock=event
  }
  setRayon(event:any){
    console.log(event)
    this.rayon=event;
  }
  setCategorie(event:any){
    console.log(event)
    this.categorie=event;
  }
  onfile(event:any){
    this.file=event.target.files[0];
    let reader= new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload=(_event)=>this.imgUrl=reader.result;
  }

  sendDataToParent(f:any){
    this.emmision.push(f.value);
    this.emmision.push(this.file);
    this.emmision.push(this.rayon);
    this.emmision.push(this.stock);
    this.emmision.push(this.categorie);
    this.notif.emit(this.emmision);
    f.resetForm()
  }

}
