import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPointSellerComponent } from './delivery-point-seller.component';

describe('DeliveryPointSellerComponent', () => {
  let component: DeliveryPointSellerComponent;
  let fixture: ComponentFixture<DeliveryPointSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPointSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPointSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
