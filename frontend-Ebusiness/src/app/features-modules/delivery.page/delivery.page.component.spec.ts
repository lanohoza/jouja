import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delivery.PageComponent } from './delivery.page.component';

describe('Delivery.PageComponent', () => {
  let component: Delivery.PageComponent;
  let fixture: ComponentFixture<Delivery.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delivery.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Delivery.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
