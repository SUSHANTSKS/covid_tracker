import { TestBed } from '@angular/core/testing';

import { CountrySelectionsService } from './country-selections.service';

describe('CountrySelectionsService', () => {
  let service: CountrySelectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySelectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
