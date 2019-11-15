import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController,ModalOptions } from 'ionic-angular';
import { PancitOrderPage } from '../pancit-order/pancit-order';
import { MapLocationPage } from '../map-location/map-location';
import { GlobalProvider } from '../../providers/global/global';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PancitCapitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pancit-capital',
  templateUrl: 'pancit-capital.html',
})
export class PancitCapitalPage {

  constructor(
   private modal:ModalController,
   public navCtrl: NavController,
   public navParams: NavParams,
   private http: Http,
   public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    if (this.global.placearray.length==0) {
      var header = new Headers();
          header.append("Accept", "application/json");
          header.append("Content-Type", "application/x-www-form-urlencoded");    
      let option = new RequestOptions({ headers: header });
      let urlSearchParams = new URLSearchParams();
          urlSearchParams.append('pass', 'getplaces');
      let body = urlSearchParams.toString()
      this.http.post(this.global.api,body,option)
       .map(response => response.json())
       .subscribe(res => {
         this.global.placearray = res.data
       },error=>{
          this.global.presentAlert("No Internet/Server Down!","warning")
       })
    }
  }

  ordert(a){
      const mymodaloptions:ModalOptions = {
        enableBackdropDismiss:false
      }
      const mymodal = this.modal.create(PancitOrderPage,{data:a},mymodaloptions)
      mymodal.present()
  }
  maps(a){
      const mymodaloptions:ModalOptions = {
        enableBackdropDismiss:true
      }
      const mymodal = this.modal.create(MapLocationPage,{data:a},mymodaloptions)
      mymodal.present()
  }

}
