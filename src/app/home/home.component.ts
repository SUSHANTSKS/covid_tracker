import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from "rxjs/operators";
import { CountrySelectionsService } from '../country-selections.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// import {countryList} from "../../assets/Data";

// import {CountrySelectionsService} from '../country-selections.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _userPreferencesService: CountrySelectionsService;
  country: any;
  // CountryDetails: any;
  CountryDetails:any = {}
  table2:any;
  sks:any;
table3:any;
mykey:any;
newdemo:any;
Result2: any;
finalData:any;
  constructor(private httpClient: HttpClient) {
    this._userPreferencesService = new CountrySelectionsService();
  }

  get colour(): string {
   // console.log("get color", this._userPreferencesService.colourPreference)
    this.country = this._userPreferencesService.colourPreference;
    //console.log("country", this.country)
    return this._userPreferencesService.colourPreference;

  }

  // Implement a setter to change the colourPreference value
  // of the service
  set colour(value: string) {
    this._userPreferencesService.colourPreference = value;
    //console.log("set color", value);

  }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit(): void {
    console.log("ng on init in header", this.country)
    console.log("ng on init")
    //this.httpClient.get("https://covid-api.mmediagroup.fr/v1/cases?country").subscribe(res => {
    
      this.httpClient.get("./assets/Data/country.json").subscribe(res => {

      //this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe(res => {
      console.log("data is in home", res);


      this.newdemo = JSON.stringify(res);


      

      var result = Object.entries(res);
      console.log("results", result);
      console.log("results for india", result[79]);

      this.Result2 = result[79][1];
      console.log("Result2", this.Result2);

      var resultNew = Object.entries(this.Result2);
      console.log("resultNew", resultNew[0][1]);

      this.finalData = resultNew[0][1];
      // console.log("results for india", result[79]);




      // // this.CountryDetails = result[79];
      // // console.log("data is", JSON.stringify(this.CountryDetails[1]));

      // this.table2 = [this.CountryDetails[1]];
      // console.log("data is table", JSON.stringify(this.table2));

      // // this.table3 = JSON.stringify(this.table2);
      // console.log("data is table 3", JSON.stringify(this.table3));

      // this.sks = JSON.stringify(this.table3[0].DEMO);


      // this.newdemo = [].concat(this.newdemo);

      // console.log("new demo is", this.newdemo);
  })

}









}
