import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-point-seller',
  templateUrl: './delivery-point-seller.component.html',
  styleUrls: ['./delivery-point-seller.component.css']
})
export class DeliveryPointSellerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lat =36.7525 ;
  long = 3.04197;
}
