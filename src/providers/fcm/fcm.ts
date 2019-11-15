import { Injectable } from '@angular/core';
//import { Firebase } from '@ionic-native/firebase';

import { Platform } from 'ionic-angular';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(
  	private platform: Platform) {
  }

}
