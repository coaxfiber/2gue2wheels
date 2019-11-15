import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';

import { ModalController,ModalOptions } from 'ionic-angular';
import { MapLocationPage } from '../map-location/map-location';
/**
 * Generated class for the PancitOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pancit-order',
  templateUrl: 'pancit-order.html',
})
export class PancitOrderPage {
  constructor(
   private modal:ModalController,
   private view:ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ModalSalamatPage');
  }
  closemodal(){
  	this.view.dismiss();
  }
  maps(a){
      const mymodaloptions:ModalOptions = {
        enableBackdropDismiss:true
      }
      const mymodal = this.modal.create(MapLocationPage,{data:a},mymodaloptions)
      mymodal.present()
  }
}
