import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "./Fournisseur";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  baseurl=environment.url;
  constructor(private http:HttpClient) { }
  getAll():Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(this.baseurl+'fournisseurs');
  }

  addFournisseur(fournisseur:any){
    return this.http.post(this.baseurl+'addfournisseur', fournisseur, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  deleteFournisseurk( fournisseur:Fournisseur):Observable<Fournisseur>{
    return this.http.delete<Fournisseur>(this.baseurl+'delfournisseur/'+fournisseur.idFournisseur)
  }

  updateFournisseur(fournisseur:any){
    return this.http.put(this.baseurl+'updatefournisseur', fournisseur )
  }
}
