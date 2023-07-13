import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipingComponent } from './shiping.component';

describe('SipingComponent', () => {
  let component: ShipingComponent;
  let fixture: ComponentFixture<ShipingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipingComponent]
    });
    fixture = TestBed.createComponent(ShipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
