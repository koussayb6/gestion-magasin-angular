import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-magasin-angular';

  nbrNotif!:any ;
  countNotif(event:any){
    this.nbrNotif=event;
  }


}
