import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Stock} from "../stock/Stock";
import {Reclamation} from "./Reclamation";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  baseurl=environment.url
  constructor(private http:HttpClient) { }

  getAll():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.baseurl+'reclamations');
  }
  addReclamation(reclamation:any){
    return this.http.post(this.baseurl+'addReclamation', reclamation, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  deleteReclamation( reclamation:Reclamation):Observable<Reclamation>{
    return this.http.delete<Reclamation>(this.baseurl+'deletereclamation/'+reclamation.idReclamation)
  }
    confirmeReclama(reclamation:Reclamation){
    return this.http.put(this.baseurl+'confirmereclama', reclamation )
  }
  refuseReclama(reclamation:Reclamation){
    return this.http.put(this.baseurl+'refusereclama', reclamation )
  }

}
