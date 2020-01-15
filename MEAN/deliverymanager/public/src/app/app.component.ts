import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapComponent } from './map/map.component';


declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'public';
  map: any;

  @ViewChild('gmap', { static: false }) gmapElement: ElementRef;

  ngOnInit() {

  }
  ngAfterViewInit() {
    // console.log("gmap", this.gmapElement.nativeElement);
    // let mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROAD
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
