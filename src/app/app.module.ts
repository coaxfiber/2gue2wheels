import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PancitCapitalPage } from '../pages/pancit-capital/pancit-capital';
import { MapLocationPage } from '../pages/map-location/map-location';
import { PancitOrderPage } from '../pages/pancit-order/pancit-order';
import { LocatePage } from '../pages/locate/locate';
import { ParcelPage } from '../pages/parcel/parcel';
import { FoodManagementPage } from '../pages/food-management/food-management';
import { OrdersPage } from '../pages/orders/orders';
import { UsersPage } from '../pages/users/users';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { FaqsPage } from '../pages/faqs/faqs';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { DataPrivacyPage } from '../pages/data-privacy/data-privacy';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { DeveloperPage } from '../pages/developer/developer';
import { RatesPage } from '../pages/rates/rates';
import { LoginPage } from '../pages/login/login';
import { MapChangeLocPage } from '../pages/map-change-loc/map-change-loc';

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
    PancitCapitalPage,
    PancitOrderPage,
    MapLocationPage,
    LocatePage,
    ParcelPage,
    FoodManagementPage,
    OrdersPage,
    UsersPage,
    AboutPage,
    FaqsPage,
    TermsAndConditionsPage,
    DataPrivacyPage,
    ContactUsPage,
    DeveloperPage,
    RatesPage,
    LoginPage,
    MapChangeLocPage
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
    PancitCapitalPage,
    PancitOrderPage,
    MapLocationPage,
    LocatePage,
    ParcelPage,
    FoodManagementPage,
    OrdersPage,
    UsersPage,
    AboutPage,
    FaqsPage,
    TermsAndConditionsPage,
    DataPrivacyPage,
    ContactUsPage,
    DeveloperPage,
    RatesPage,
    LoginPage,
    MapChangeLocPage
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
