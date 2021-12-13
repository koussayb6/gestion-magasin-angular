import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Fournisseur} from "../Fournisseur";

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {

  @Input() fournisseur:Fournisseur=new Fournisseur();
  @Output() notif= new EventEmitter<Fournisseur>();

  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Fournisseur){
    this.notif.emit(f);
  }

}
