import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayDeliveryComponent } from './delay-delivery.component';

describe('DelayDeliveryComponent', () => {
  let component: DelayDeliveryComponent;
  let fixture: ComponentFixture<DelayDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelayDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
