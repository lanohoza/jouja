import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material-module';
import {PaymentPageModule} from './payment.page/payment.page.module'
import {DeliveryPageModule} from './delivery.page/delivery.page.module'

@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    PaymentPageModule,
    DeliveryPageModule,
    
   
  ],
  exports:[
    MaterialModule,
    PaymentPageModule,
    DeliveryPageModule,
    
    
  ],
  providers: [],
})
export class FeaturesModule { }
