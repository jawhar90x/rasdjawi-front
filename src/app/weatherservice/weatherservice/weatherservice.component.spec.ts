import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherserviceComponent } from './weatherservice.component';

describe('WeatherserviceComponent', () => {
  let component: WeatherserviceComponent;
  let fixture: ComponentFixture<WeatherserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
