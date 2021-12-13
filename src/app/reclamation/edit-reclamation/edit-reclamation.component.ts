import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reclamation} from "../Reclamation";

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {
  @Input() reclamation!:Reclamation;
  @Output() notif= new EventEmitter<Reclamation>();
  //reclamation1= new Reclamation();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Reclamation){
    this.notif.emit(f);
  }

}
