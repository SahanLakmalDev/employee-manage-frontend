import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEmployeeComponent } from './active-employee.component';

describe('ActiveEmployeeComponent', () => {
  let component: ActiveEmployeeComponent;
  let fixture: ComponentFixture<ActiveEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
