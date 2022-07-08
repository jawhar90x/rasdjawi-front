import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherserviceListComponent } from './weatherservice-list.component';

describe('WeatherserviceListComponent', () => {
  let component: WeatherserviceListComponent;
  let fixture: ComponentFixture<WeatherserviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherserviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
