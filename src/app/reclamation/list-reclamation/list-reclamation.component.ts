import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../Reclamation";
import {ReclamationService} from "../reclamation.service";

import {StockService} from "../../stock/stock.service";
import {Stock} from "../../stock/Stock";

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {

  Reclamation!:Reclamation[];
  reclamation!:Reclamation;
  show:boolean=false;
  show2:boolean=false;
  constructor(private ReclamationService:ReclamationService) { }

  ngOnInit(): void {
    this.ReclamationService.getAll().subscribe((resultat)=>{
        console.log(resultat);
        this.Reclamation=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  add(){
    this.show=true;
  }
  addReclamation(reclamation:Reclamation){
    this.Reclamation.push(reclamation);
    this.show=false;
    this.ReclamationService.addReclamation(reclamation).subscribe((resultat)=>{
        console.log(resultat);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }
  delete(Reclamation:Reclamation){
    var result=confirm("sure?");
    if(result){
      //this.invoices.splice(index);
      this.ReclamationService.deleteReclamation(Reclamation).subscribe(
        () => this.Reclamation = this.Reclamation.filter(e => e.idReclamation != Reclamation.idReclamation),
      );}
  }

  update(reclamation:any){
    this.show2=true;
    this.reclamation=reclamation;

  }
  updateReclamation(reclamation:Reclamation){
    this.ReclamationService.updateReclamation(reclamation).subscribe();
    this.show2=false;
  }
}
