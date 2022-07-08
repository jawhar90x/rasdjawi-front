import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducsComponent } from './add-producs.component';

describe('AddProducsComponent', () => {
  let component: AddProducsComponent;
  let fixture: ComponentFixture<AddProducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProducsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
