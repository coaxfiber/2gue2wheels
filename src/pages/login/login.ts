import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


import { ModalController,ModalOptions } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
   private modal:ModalController,
   private view:ViewController,
    public navParams: NavParams) {
  }
  closemodal(){
  	this.view.dismiss();
  }

  ionViewDidLoad() {
  }

}
