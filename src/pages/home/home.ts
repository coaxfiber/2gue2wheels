import { Component } from '@angular/core';
// import { FCM } from '@ionic-native/fcm';
// import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // pushes: any = [];
  constructor(
    // private fcm: FCM, 
    // public plt: Platform
    ) {
    // this.plt.ready()
    //   .then(() => {
    //     this.fcm.onNotification().subscribe(data => {
    //       if (data.wasTapped) {
    //         console.log("Received in background");
    //       } else {
    //         console.log("Received in foreground");
    //       };
    //     });

    //     this.fcm.onTokenRefresh().subscribe(token => {
    //       // Register your new token in your back-end if you want
    //       // backend.registerToken(token);
    //     });
    //   })
  }
  // subscribeToTopic() {
  //   this.fcm.subscribeToTopic('enappd');
  // }
  // getToken() {
  //   this.fcm.getToken().then(token => {
  //     // Register your new token in your back-end if you want
  //     // backend.registerToken(token);
  //   });
  // }
  // unsubscribeFromTopic() {
  //   this.fcm.unsubscribeFromTopic('enappd');
  // }
}