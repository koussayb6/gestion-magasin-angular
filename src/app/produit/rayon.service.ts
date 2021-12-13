import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rayon} from "./Rayon";

@Injectable({
  providedIn: 'root'
})
export class RayonService {

  baseurl=environment.url
  constructor( private http:HttpClient) { }

  getAll():Observable<Rayon[]>{
    return this.http.get<Rayon[]>(this.baseurl+'rayons');
  }

  addRayon(data:any):Observable<Rayon>{
    /*let params= new HttpParams();
    params.set('file', file);*/
    return this.http.post<Rayon>(this.baseurl+'addrayon', data)

  }
  deleteRayon( rayon:Rayon):Observable<Rayon>{
    return this.http.delete<Rayon>(this.baseurl+'deletestock/'+rayon.idRayon)
  }

  updateRayon(rayon:Rayon){
    return this.http.put(this.baseurl+'updaterayon', rayon )
  }}
