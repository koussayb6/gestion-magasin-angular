import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Facture} from "../Facture";

@Component({
  selector: 'app-edit-facture',
  templateUrl: './edit-facture.component.html',
  styleUrls: ['./edit-facture.component.css']
})

export class EditFactureComponent implements OnInit {
  @Input() facture:Facture= new Facture();
  @Output() notif= new EventEmitter<Facture>();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Facture){
    this.notif.emit(f);
  }
}

