import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmployeeCardComponent } from './add-new-employee-card.component';

describe('AddNewEmployeeCardComponent', () => {
  let component: AddNewEmployeeCardComponent;
  let fixture: ComponentFixture<AddNewEmployeeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEmployeeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEmployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
