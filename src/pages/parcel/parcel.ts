import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { GlobalProvider } from '../../providers/global/global';
declare var google;


/**
 * Generated class for the ParcelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parcel',
  templateUrl: 'parcel.html',
})
export class ParcelPage {


map
@ViewChild('map2') mapElement: ElementRef;

    routes:any
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;

    clickmap='curr'

    currtemp

    a=true
    b=true
  constructor(
   public global: GlobalProvider,
   public navCtrl: NavController, 
    private geolocation: Geolocation,
   public navParams: NavParams) {
  	
  }


  ionViewDidLoad() {
      let position = new google.maps.LatLng(17.617531, 121.731231);
     let mapOptions = {
        center: position,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
 	    this.getlocation()
	    google.maps.event.addListener(this.map, 'click', event => {
	    	this.clearroute()
      		this.mapclickfunc(event.latLng)
		});

	  //this.getlocation()  
      //this.getlocation();
      
  }

clearroute(){
  if (this.directionsDisplay != null) {
    this.directionsDisplay.setMap(null);
    //this.directionsDisplay.setPanel('');
    this.directionsDisplay = null;
    this.routes=undefined;
  }
}

  mapclickfunc(x){

    this.currtemp = undefined  
    this.navParams.data.curr = x;
    this.global.latlng = x
 	  this.calculateAndDisplayRoute()
    //this.calculateAndDisplayRoute()
  }

  calculateAndDisplayRoute() {
    var get;
    this.distance=''
    this.clickmap = 'loading';
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(this.map);
    var directionsDisplay = this.directionsDisplay
    this.directionsService.route({
    origin: this.navParams.data.curr,
    destination:  this.navParams.data.place,
    travelMode: 'WALKING'
      }, function(response, status) {
      if (status === 'OK') {
        response.routes[0].warnings = [];

    this.distance = response.routes[0].legs[0].distance.text;
        getval(response.routes[0].legs[0].distance.text)
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
        this.global.latlng = undefined
      }
    });
    function getval(x){
      get = x;
    }
    setTimeout(()=>{ this.assignroute(get) }, 1000);    

}
distance=''
assignroute(x){
    this.clickmap = 'loaded';
    this.distance = x;

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
}
