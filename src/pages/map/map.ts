import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,

} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";
import { Platform } from 'ionic-angular';
import { Geolocation } from '../../../node_modules/@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  map: GoogleMap;
  constructor(public platform: Platform, public geolocation: Geolocation, public navCtrl: NavController, public menuCtrl: MenuController) { }

  navButton(){
    this.navCtrl.push(HomePage);
  }

  doClick(){
    this.menuCtrl.open();
  }

  ionViewDidLoad() {

    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    // const options = {
    //   enableHighAccuracy: true
    // }

    // this.geolocation.getCurrentPosition(options).then((resp) => {
    //   const lat = +resp.coords.latitude;
    //   const long = +resp.coords.longitude;

    //   console.log(lat);
    //   let mapOptions: GoogleMapOptions = {
    //     camera: {
    //       target: {
    //         lat: lat,
    //         lng: long
    //       },
    //       zoom: 18,
    //       tilt: 30
    //     }
    //   };
  
    //   this.map = GoogleMaps.create('map_canvas', mapOptions);
    // })
    // 34.021863

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat:  34.021863,
          lng: 118.287008
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }
  
}