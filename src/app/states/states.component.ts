import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BackendApiService} from "../services/backend-api.service"

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  products: any;
  table2:any;
  sks:any;
table3:any;
mykey:any;
newdemo:any;
Result2: any;
finalData:any;
stateData:any;
  constructor( 
    public BackendApiService: BackendApiService,
    public router: Router,
    public http: HttpClient,
    ) { }

  ngOnInit(): void {

    this.BackendApiService.getProductList().subscribe(res => {
      // this.products=res;
      // console.log("json value" + JSON.stringify(this.products));


      // console.log("data is in home", res);


      this.newdemo = JSON.stringify(res);
      var result = Object.entries(res);
      console.log("results", result);
      console.log("results for india", result[79]);

      this.Result2 = result[79][1];
      console.log("Result2", this.Result2);

      var resultNew = Object.entries(this.Result2);
      console.log("resultNew", resultNew);

      this.stateData = resultNew;



   });
  }

}
