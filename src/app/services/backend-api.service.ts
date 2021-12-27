import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  listProducts: any;

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { 
    this.http.get("./assets/Data/country.json")
    .subscribe(res => {
      this.listProducts = res;
      console.log("this.listProducts.length:" + JSON.stringify(this.listProducts));
    })
  }

  getProductList(): Observable<any> {
    return this.http.get("./assets/Data/country.json");
  
  }
}
