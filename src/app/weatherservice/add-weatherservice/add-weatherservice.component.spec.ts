import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeatherserviceComponent } from './add-weatherservice.component';

describe('AddWeatherserviceComponent', () => {
  let component: AddWeatherserviceComponent;
  let fixture: ComponentFixture<AddWeatherserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWeatherserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeatherserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
