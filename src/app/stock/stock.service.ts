import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Stock} from "./Stock";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseurl=environment.url
  constructor( private http:HttpClient) { }

  getAll():Observable<Stock[]>{
    return this.http.get<Stock[]>(this.baseurl+'sotcks');
  }

  addStock(stock:any):Observable<Stock>{
    return this.http.post<Stock>(this.baseurl+'addstock', stock, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  deleteStock( stock:Stock):Observable<Stock>{
    return this.http.delete<Stock>(this.baseurl+'deletestock/'+stock.idStock)
  }

  updateStock(stock:any){
    return this.http.put(this.baseurl+'updatestock', stock )
  }
}
