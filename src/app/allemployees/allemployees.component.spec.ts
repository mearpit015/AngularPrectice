import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllemployeesComponent } from './allemployees.component';

describe('AllemployeesComponent', () => {
  let component: AllemployeesComponent;
  let fixture: ComponentFixture<AllemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
