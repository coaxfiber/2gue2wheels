import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation/';
import { ModalController,ModalOptions } from 'ionic-angular';
import { MapLocationPage } from '../map-location/map-location';
import { LocatePage } from '../locate/locate';
import { GlobalProvider } from '../../providers/global/global';
import { MapChangeLocPage } from '../map-change-loc/map-change-loc';
declare var google;
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

  sched=false

  nowdate = new Date();
  order=''
  datesched=''
  timesched=''

  placepos
  currpos=undefined

  distance=''

  error = ''
  geo=true
  constructor(
   private modal:ModalController,
   private view:ViewController,
    public navParams: NavParams,public navCtrl: NavController,
   public global: GlobalProvider,
   private geolocation: Geolocation,) {
    this.placepos = new google.maps.LatLng(navParams.data.data.lat, navParams.data.data.lng);
    
    // this.currpos = new google.maps.LatLng(17.646343, 121.679447);
    //  this.error = 'got'
    //  this.calculateAndDisplayRoutetest()

    this.getlocation()
  }

  ionViewDidLoad() {
    this.global.latlng = undefined
    //console.log('ionViewDidLoad ModalSalamatPage');
  }

  ionViewDidEnter() {
    if (this.global.latlng != undefined) {
      this.currpos = this.global.latlng
      this.error=''
      this.calculateAndDisplayRoutetest() 
      console.log( this.global.latlng)
    }
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

  
  getlocation(){
        this.geolocation.getCurrentPosition({timeout: 10000,enableHighAccuracy: true}).then((resp) => {
            this.currpos = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            this.geo=false
            this.calculateAndDisplayRoutetest()
        }).catch((error) => {
          this.error='noloc'
          this.global.presentAlert("Failed to locate position. Turn on location or allow app to access location.","Warning!")
        });
  }

    routes:any
    directionsService = new google.maps.DirectionsService;

calculateAndDisplayRoutetest() {
    var get;
    this.directionsService = new google.maps.DirectionsService;

    this.directionsService.route({
    origin: this.currpos,
    destination: this.placepos,
    travelMode: 'WALKING'
      }, function(response, status) {
      if (status === 'OK') {
        getval(response.routes)
      } else {
      }
    });
    function getval(x){
      get = x;
    }
    setTimeout(()=>{ this.assignroute(get) }, 1000);
    

}

  price=50
  assignroute(x){
   this.error = 'got'
   this.routes=x;
   this.distance = this.routes[0].legs[0].distance.text
   var kil = parseFloat(this.routes[0].legs[0].distance.text)
   var i = 3.25;
   while(i<=kil){
     this.price = this.price + 5;
     i = i + 0.5;
   }
  } 



  mapsfunc(){
     this.navCtrl.push(MapChangeLocPage,{curr:this.currpos,place:this.placepos,data:this.navParams.data})
  }
}
