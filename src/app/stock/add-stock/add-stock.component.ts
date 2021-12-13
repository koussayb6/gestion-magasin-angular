import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Stock} from "../Stock";

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  @Input() stock:Stock= new Stock();
  @Output() notif= new EventEmitter<Stock>();
 // stock1= new Stock();
  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(f:Stock){
    this.notif.emit(f);
  }

}
