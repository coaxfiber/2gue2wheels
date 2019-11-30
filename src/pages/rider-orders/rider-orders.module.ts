import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderOrdersPage } from './rider-orders';

@NgModule({
  declarations: [
    RiderOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderOrdersPage),
  ],
})
export class RiderOrdersPageModule {}
