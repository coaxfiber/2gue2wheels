import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PancitOrderPage } from './pancit-order';

@NgModule({
  declarations: [
    PancitOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(PancitOrderPage),
  ],
})
export class PancitOrderPageModule {}
