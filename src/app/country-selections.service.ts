import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrySelectionsService {
  colourPreference: string = 'india';

  constructor() { }
}
