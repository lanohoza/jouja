import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-point',
  templateUrl: './delivery-point.component.html',
  styleUrls: ['./delivery-point.component.css']
})
export class DeliveryPointComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  DeliveryList=["Delivery1", "Delivery2", "Delivery3", "Delivery4"]
  lat =36.7525 ;
  long = 3.04197;

}
