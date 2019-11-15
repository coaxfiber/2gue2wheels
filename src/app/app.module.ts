import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PancitCapitalPage } from '../pages/pancit-capital/pancit-capital';
import { MapLocationPage } from '../pages/map-location/map-location';
import { PancitOrderPage } from '../pages/pancit-order/pancit-order';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

//import { FCM } from '@ionic-native/fcm';

// const firebase = {
//    apiKey:"AIzaSyBa4ttn-FT7zbVKCUNwQOiNOclGCJAF1CA",
//    authDomain: "gue2wheels-ddf59.firebaseapp.com",
//    databaseURL: "https://gue2wheels-ddf59.firebaseio.com/",
//    projectId: "gue2wheels-ddf59",
//    storageBucket:"gue2wheels-ddf59.appspot.com/",
//    messagingSenderId:"1093126426898"
// }
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
    // AngularFireModule.initializeApp(firebase), 
    // AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PancitCapitalPage,
    PancitOrderPage,
    MapLocationPage
  ],
  providers: [
  Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    //FCM
  ]
})
export class AppModule {}
