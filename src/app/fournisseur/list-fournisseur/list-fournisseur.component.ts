import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../Fournisseur";
import {FournisseurService} from "../fournisseur.service";

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs!:Fournisseur[];
  show:boolean=false;
  show2:boolean=false;
  fournisseur!:Fournisseur;

  constructor(private serviceFournisseur:FournisseurService) { }

  ngOnInit(): void {
    this.serviceFournisseur.getAll().subscribe((resultat)=>{
        console.log(resultat);
        this.fournisseurs=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }


  add(){
    this.show=true;
  }

  addFournisseur(fournisseur:any){
    this.fournisseurs.push(fournisseur);
    this.show=false;
    let close=document.getElementById("close");
    close?.click();
    this.serviceFournisseur.addFournisseur(fournisseur).subscribe((resultat)=>{
        console.log(resultat);
        //this.fournisseurs=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(fournisseur:Fournisseur){
    var result=confirm("sure?");
    if(result){
      //this.invoices.splice(index);
      this.serviceFournisseur.deleteFournisseurk(fournisseur).subscribe(
        () => this.fournisseurs = this.fournisseurs.filter(e => e.idFournisseur != fournisseur.idFournisseur),
      );}
  }


  update(fournisseur:any){
    this.show2=true;
    this.fournisseur=fournisseur;

  }
  updateFournisseur(fournisseur:any){
    let close=document.getElementById("close");
    close?.click();
    fournisseur.idFournisseur=this.fournisseur.idFournisseur;
    this.serviceFournisseur.updateFournisseur(fournisseur).subscribe();

    this.show2=false;
  }


}
