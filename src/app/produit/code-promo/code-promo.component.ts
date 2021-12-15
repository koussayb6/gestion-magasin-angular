import {Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-code-promo',
  templateUrl: './code-promo.component.html',
  styleUrls: ['./code-promo.component.css']
})
export class CodePromoComponent implements OnInit {
@Output() notif= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
sendData(event:any){
    this.notif.emit(event.value)
}
}
