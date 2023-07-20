import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangeExComponent } from './ng-onchange-ex.component';

describe('NgOnchangeExComponent', () => {
  let component: NgOnchangeExComponent;
  let fixture: ComponentFixture<NgOnchangeExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnchangeExComponent]
    });
    fixture = TestBed.createComponent(NgOnchangeExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
