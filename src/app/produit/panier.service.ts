import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "./Produit";
import {Panier} from "./Panier";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  baseurl=environment.url
  constructor( private http:HttpClient) { }

  getAllpanier(idClient:any):Observable<Panier[]>{
    return this.http.get<Panier[]>(this.baseurl+'panier/'+idClient);
  }

  addpanier( idClient:any, idProduit:any , qte:any):Observable<Panier>{

    return this.http.get<Panier>(this.baseurl+'addpanier/'+idClient+'/'+idProduit+'/'+qte)

  }


}
