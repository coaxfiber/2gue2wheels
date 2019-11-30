import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodManagementPage } from './food-management';

@NgModule({
  declarations: [
    FoodManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodManagementPage),
  ],
})
export class FoodManagementPageModule {}
