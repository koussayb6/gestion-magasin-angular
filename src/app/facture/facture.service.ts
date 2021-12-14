import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Stock} from "../stock/Stock";
import {Facture} from "./Facture";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  baseurl= environment.url;
  constructor(private http:HttpClient) { }

  getAll():Observable<Facture[]>{
    return this.http.get<Facture[]>(this.baseurl+'factures');
  }
  getFacture(id:any):Observable<Facture>{
    return this.http.get<Facture>(this.baseurl+'facture/'+id);
  }

  addFacture(facture:Facture, id:any){
    return this.http.post(this.baseurl+'addfacture/'+id, facture, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  cancelFacture( facture:Facture):Observable<Facture>{
    return this.http.put<Facture>(this.baseurl+'cancelfacture/',facture)
  }


}
