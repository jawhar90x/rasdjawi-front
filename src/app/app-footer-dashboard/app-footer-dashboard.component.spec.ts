import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterDashboardComponent } from './app-footer-dashboard.component';

describe('AppFooterDashboardComponent', () => {
  let component: AppFooterDashboardComponent;
  let fixture: ComponentFixture<AppFooterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFooterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
