import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  placearray=[]
  api = "http://eltonbagne.info/api/2g2w/";
  latlng
  constructor(
  private domSanitizer: DomSanitizer, 
  private alertCtrl: AlertController) {
   
  }

  presentAlert(val:any,val1="Alert") {
    let alert = this.alertCtrl.create({
      title: val1,
      subTitle: val,
      buttons: ['Dismiss']
    });
    alert.present();
  }

	checkphoto(x){
	if (x=='') {
	 	return 'assets/imgs/no-profile-image.jpg';
	  }else{
	  return this.domSanitizer.bypassSecurityTrustUrl('data:image/jpeg;charset=utf-8;base64,' + x);
	  }
	}
}
