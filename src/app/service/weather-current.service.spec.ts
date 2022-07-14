import { TestBed } from '@angular/core/testing';

import { WeatherCurrentService } from './weather-current.service';

describe('WeatherCurrentService', () => {
  let service: WeatherCurrentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCurrentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
