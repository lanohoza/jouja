import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-home',
  templateUrl: './delivery-home.component.html',
  styleUrls: ['./delivery-home.component.css']
})
export class DeliveryHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 

  CommunesList = [
    "El-oued","Robbah","Oued elalenda","Batna"
  ];
  WilayaList = ["El-oued","Batna","Khanchela","Biskra","Alger"];
   
  

}
