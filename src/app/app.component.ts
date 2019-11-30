import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { ModalController,ModalOptions } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { PancitCapitalPage } from '../pages/pancit-capital/pancit-capital';
import { ParcelPage } from '../pages/parcel/parcel';
import { OrdersPage } from '../pages/orders/orders';
import { FoodManagementPage } from '../pages/food-management/food-management';
import { UsersPage } from '../pages/users/users';
import { AboutPage } from '../pages/about/about';
import { FaqsPage } from '../pages/faqs/faqs';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { DataPrivacyPage } from '../pages/data-privacy/data-privacy';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { DeveloperPage } from '../pages/developer/developer';
import { RatesPage } from '../pages/rates/rates';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PancitCapitalPage;

  user="admin"

  constructor(
   public menuCtrl: MenuController,
   public platform: Platform,
   public statusBar: StatusBar,
   public splashScreen: SplashScreen,
   private modal:ModalController,) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  about = false;
  openPage(x) {
    this.menuCtrl.close();
    if (x==1) {
      this.nav.setRoot(HomePage);
    }
    if (x==2) {
      this.nav.setRoot(ParcelPage);
    }
    if (x==3) {
      this.nav.setRoot(PancitCapitalPage);
    }
    if (x==4) {
      this.nav.setRoot(FoodManagementPage);
    }
    if (x==5) {
      this.nav.setRoot(OrdersPage);
    }
    if (x==6) {
      this.nav.setRoot(UsersPage);
    }
    if (x==7) {
      this.nav.setRoot(AboutPage);
    }
    if (x==8) {
      this.nav.setRoot(TermsAndConditionsPage);
    }
    if (x==9) {
      this.nav.setRoot(DataPrivacyPage);
    }
    if (x==10) {
      this.nav.setRoot(ContactUsPage);
    }
    if (x==11) {
      this.nav.setRoot(FaqsPage);
    }
    if (x==12) {
      this.nav.setRoot(DeveloperPage);
    }
    if (x==13) {
      this.nav.setRoot(RatesPage);
    }

  }

  openhidden(x){
    if (x==1) {
      if (this.about == false) {
        this.about = true
      }else
        this.about = false
    }
    if (x==2) {
       const mymodaloptions:ModalOptions = {
        enableBackdropDismiss:false
      }
      var none='none'
      const mymodal = this.modal.create(LoginPage,{data:none},mymodaloptions)
      mymodal.present()
    }

    
  }
}
