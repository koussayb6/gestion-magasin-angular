import { Component, OnInit } from '@angular/core';
import {Stock} from "../../stock/Stock";
import {Notifications} from "../Notifications";
import {NotificationsService} from "../notifications.service";

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.css']
})
export class ListNotificationsComponent implements OnInit {
  notifications!:Notifications[];
  Notifications!:Notifications[];
  constructor(private NotificationsService:NotificationsService) { }

  ngOnInit(): void {
    this.NotificationsService.getAll().subscribe((resultat)=>{
        console.log(resultat);
        this.Notifications=resultat;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

}
