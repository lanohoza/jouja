import { Component, OnInit } from '@angular/core';
import { DeliveryOption } from '@shared/domain/enums/delivery.option';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery.page.component.html',
  styleUrls: ['./delivery.page.component.css']
})
export class DeliveryPageComponent implements OnInit {
 
  constructor() { }
  lat =36.7525 ;
  long = 3.04197;
  ngOnInit(): void {
  }
  DeliveryOption:DeliveryOption=DeliveryOption.home;
  ChangeDeliverytOption(deliveryoption: String) {
    

    switch (deliveryoption) {
      case 'Home':

        this.DeliveryOption=DeliveryOption.home;
       
        break;
      case 'Point':
        this.DeliveryOption=DeliveryOption.point;
      
        break;
      case 'PointSeller':
        this.DeliveryOption=DeliveryOption.pointseller;
        break;
        case 'notSelected':
          this.DeliveryOption=DeliveryOption.notSelected;
       
          break;
       
    }
    console.log(this.DeliveryOption)
  }

 

}
