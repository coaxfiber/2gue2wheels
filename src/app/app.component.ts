import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PancitCapitalPage } from '../pages/pancit-capital/pancit-capital';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PancitCapitalPage;

  pages: Array<{title: string, component: any}>;

  constructor(
   public menuCtrl: MenuController,
   public platform: Platform,
   public statusBar: StatusBar,
   public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(x) {
    this.menuCtrl.close();
    if (x==1) {
      this.nav.setRoot(HomePage);
    }
    if (x==2) {
      this.nav.setRoot(ListPage);
    }
    if (x==3) {
      this.nav.setRoot(PancitCapitalPage);
    }
    if (x==4) {
      this.nav.setRoot(ListPage);
    }
    if (x==5) {
      this.nav.setRoot(ListPage);
    }
  }
}
