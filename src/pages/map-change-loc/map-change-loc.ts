import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { GlobalProvider } from '../../providers/global/global';
declare var google;

/**
 * Generated class for the MapChangeLocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-change-loc',
  templateUrl: 'map-change-loc.html',
})
export class MapChangeLocPage {

map
@ViewChild('map2') mapElement: ElementRef;

    routes:any
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;

    clickmap='curr'

    currtemp
  constructor(
   public global: GlobalProvider,
   public navCtrl: NavController, 
   public navParams: NavParams) {
  	
  }


  ionViewDidLoad() {
     let mapOptions = {
        center: this.navParams.data.place,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      if (this.navParams.data.curr==undefined) {
  		this.navParams.data.curr = this.navParams.data.place
	  		this.clickmap = 'nocurr'
	    }else{
        this.currtemp = 'curr'
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
      this.calculateAndDisplayRoute()
 	 
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
}
