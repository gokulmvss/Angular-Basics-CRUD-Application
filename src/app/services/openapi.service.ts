import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenapiService {

  constructor(private httpclient:HttpClient) { } // tells you on what component is dependant on
  getallproductsfromapi():Observable<any>{ // return an observable object; 
    return this.httpclient.get("https://dummyjson.com/products")
  }

}
