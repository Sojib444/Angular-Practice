import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCartComponent } from './service-cart.component';

describe('ServiceCartComponent', () => {
  let component: ServiceCartComponent;
  let fixture: ComponentFixture<ServiceCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCartComponent]
    });
    fixture = TestBed.createComponent(ServiceCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
