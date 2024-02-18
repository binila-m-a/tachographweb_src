import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverdailyactivityComponent } from './driverdailyactivity.component';

describe('DriverdailyactivityComponent', () => {
  let component: DriverdailyactivityComponent;
  let fixture: ComponentFixture<DriverdailyactivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverdailyactivityComponent]
    });
    fixture = TestBed.createComponent(DriverdailyactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
