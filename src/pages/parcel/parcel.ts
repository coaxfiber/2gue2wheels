import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GlobalProvider } from '../../providers/global/global';
declare var google;

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
    a
    b
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
        if (this.a==0||this.b==0) {
          this.mapclickfunc(event.latLng)
        }
		});
    this.marker=new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position
    });
    this.marker.setMap(null)
  }

clearroute(){
  if (this.directionsDisplay != null) {
    this.directionsDisplay.setMap(null);
    this.directionsDisplay = null;
    this.routes=undefined;
  }
}

mapsfunc(x){
  this.marker.setMap(null)
  if(x=='a'){
    if (this.a==undefined) {
      this.a = 0
    }else if(this.a==0){
      this.a = undefined
    }else if(this.a==1){
      this.clearroute()
      this.a = 0
    }

  this.marker = new google.maps.Marker({
      map: this.map,
      position: this.temppos2
    });
  }
  if(x=='b'){
    if (this.b==undefined) {
      this.clearroute()
      this.b = 0
    }else if(this.b==0){
      this.b = undefined
    }else if(this.b==1){
      this.clearroute()
      this.b = 0
    }
    
  this.marker = new google.maps.Marker({
      map: this.map,
      position: this.temppos
    });
  }
}
aroute
broute
marker
temppos
temppos2
  mapclickfunc(x){
    this.marker.setMap(null)
    this.marker = new google.maps.Marker({
      map: this.map,
      position: x
    });
    if (this.a==0) {
      this.aroute = x
      this.a = 1
      this.temppos=x
    }else 
    if (this.b==0) {
      this.broute = x
      this.b = 1
      this.temppos2=x
    }
    if (this.a==1&&this.b==1) {
     this.marker.setMap(null)
     this.calculateAndDisplayRoute()
    }
  }

  calculateAndDisplayRoute() {
    var get;
    this.distance=''
    this.currtemp='loading'
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(this.map);
    var directionsDisplay = this.directionsDisplay
    this.directionsService.route({
    origin: this.aroute,
    destination:  this.broute,
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
price=50
assignroute(x){
  this.currtemp='loaded'
    this.distance = x;
    this.routes=x;
    this.price=50;
   this.distance = x
   var kil = parseFloat(x)
   var i = 3.25;
   while(i<=kil){
     this.price = this.price + 5;
     i = i + 0.5;
   }
   if (x.includes('km')) {
     // code...
   }else{
     this.price=50
   }
} 
 getlocation(){
         this.currtemp='loading'
        this.geolocation.getCurrentPosition({timeout: 10000,enableHighAccuracy: true}).then((resp) => {
            var position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var infoWindowContent = 'You are here!';
            var infoWindow = new google.maps.InfoWindow({
              content: infoWindowContent,
              position: position,
            });
            infoWindow.setMap(this.map)
         this.currtemp='loaded'
        }).catch((error) => {
          this.currtemp='failed'
          this.global.presentAlert("Failed to locate position. Turn on location or allow app to access location.","Warning!")
        });
  }
}
