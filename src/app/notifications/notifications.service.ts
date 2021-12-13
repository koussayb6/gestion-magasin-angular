import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../reclamation/Reclamation";
import {Notifications} from "./Notifications";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  baseurl=environment.url
  constructor( private http:HttpClient) { }


  getAll():Observable<Notifications[]>{
    return this.http.get<Notifications[]>(this.baseurl+'notifications');
  }
}



