import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the MapLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
@IonicPage()
@Component({
  selector: 'page-map-location',
  templateUrl: 'map-location.html',
})
export class MapLocationPage {
map
@ViewChild('map') mapElement: ElementRef;

  constructor(
   public global: GlobalProvider,
    private geolocation: Geolocation,
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private view:ViewController) {
  	console.log(navParams.data)
  }

  ionViewDidLoad() {
      let latLng = new google.maps.LatLng(parseFloat(this.navParams.data.data.lat),parseFloat(this.navParams.data.data.lng));
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);  
      //this.getlocation()  
      this.addMarker();
      //this.getlocation();
  }

    getlocation(){
        this.geolocation.getCurrentPosition({timeout: 10000,enableHighAccuracy: true}).then((resp) => {
            var position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var infoWindowContent = 'You are here!';
            var infoWindow = new google.maps.InfoWindow({
              content: infoWindowContent,
              position: position,
            });
            infoWindow.setMap(this.map)
        }).catch((error) => {
          console.log(error)
          this.global.presentAlert("Failed to locate position. Turn on location or allow app to access location.","Warning!")
        });
  }

   addMarker(){
    var marker
    marker = new google.maps.Marker({
      position: new google.maps.LatLng( parseFloat(this.navParams.data.data.lat),  parseFloat(this.navParams.data.data.lng)),
      map: this.map,
      animation: google.maps.Animation.DROP
    });
  }

  closemodal(){
  	this.view.dismiss();
  }
}
