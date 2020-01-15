import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {

    let observable = this._http.getSeattleWeather();
    observable.subscribe(data => {
      console.log(data);
      this.weather = data;
    })
  }


}
