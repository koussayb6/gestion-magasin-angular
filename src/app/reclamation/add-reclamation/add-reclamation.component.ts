import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stock} from "../../stock/Stock";
import {Reclamation} from "../Reclamation";

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  //@Input() reclamation!:Reclamation;
  @Output() notif= new EventEmitter<Reclamation>();
  reclamation= new Reclamation();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Reclamation){
    this.notif.emit(f);
  }
}
