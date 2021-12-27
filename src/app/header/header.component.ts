import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountrySelectionsService } from '../country-selections.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _userPreferencesService: CountrySelectionsService;
  country: any;
  selectedOption = null;
  CountryDetails: any;
  o:any;
  newData: any;
  id:any;

  constructor(private httpClient: HttpClient) {
    this._userPreferencesService = new CountrySelectionsService();
  }


  get colour(): string {
    //console.log("get color in header", this._userPreferencesService.colourPreference)
    this.country = this._userPreferencesService.colourPreference;
    //console.log("country in header", this.country)
    return this._userPreferencesService.colourPreference;

  }

  // Implement a setter to change the colourPreference value
  // of the service
  set colour(value: string) {
    this._userPreferencesService.colourPreference = value;
  //  console.log("set color in header", value);

  }

  ngOnInit(): void {
    console.log("ng on init in header", this.country)
    console.log("ng on init")
    this.httpClient.get("https://covid-api.mmediagroup.fr/v1/cases?country").subscribe(res => {
      console.log("data is", res)
      var result = Object.entries(res);
      console.log("results", result);
      console.log("results for india", result[79]);

      this.CountryDetails = result;

      // let obj = this.CountryDetails.find((o: { name: string; }) => o.name === "Afghanistan");

      // console.log("obj value is",obj);

    })

  }
  SelectedCountry(value: string) {
    console.log("SelectedCountry is " + value);
    // this._userPreferencesService.colourPreference = value;
  }

}
