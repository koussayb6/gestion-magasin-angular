import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Produit} from "./Produit";
import {Content} from "@angular/compiler/src/render3/r3_ast";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  baseurl=environment.url
  constructor( private http:HttpClient) { }

  getAll():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseurl+'produits');
  }

  addProduit(data:any, idStock:any, idRayon:any):Observable<Produit>{
    /*let params= new HttpParams();
    params.set('file', file);*/
    return this.http.post<Produit>(this.baseurl+'addproduit/'+idRayon+'/'+idStock, data)

  }
  deleteProduit( produit:Produit):Observable<Produit>{
    return this.http.delete<Produit>(this.baseurl+'deleteproduit/'+produit.idProduit)
  }

  updateProduit(data:any, idStock:any, idRayon:any):Observable<Produit>{

    return this.http.put<Produit>(this.baseurl+'updateproduit/'+idRayon+'/'+idStock, data)
  }
}
