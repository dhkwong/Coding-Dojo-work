import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getSeattleWeather() {
    return this._http.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=b5be77b0a714b143249f32951c5ef563');
  }
  getBurbankWeather() {
    return this._http.get('api.openweathermap.org/data/2.5/weather?id=5809844&APPID=ffe897f865a4bca94a689fa4e6ceb72e');
  }
  getChicagoWeather() {
    return this._http.get('api.openweathermap.org/data/2.5/weather?id=5809844&APPID=ffe897f865a4bca94a689fa4e6ceb72e');
  }
  getDallasWeather() {
    return this._http.get('api.openweathermap.org/data/2.5/weather?id=5809844&APPID=ffe897f865a4bca94a689fa4e6ceb72e');
  }
  getDcWeather() {
    return this._http.get('api.openweathermap.org/data/2.5/weather?id=5809844&APPID=ffe897f865a4bca94a689fa4e6ceb72e');
  }
  getSanJoseWeather() {
    return this._http.get('api.openweathermap.org/data/2.5/weather?id=5809844&APPID=ffe897f865a4bca94a689fa4e6ceb72e');
  }
}
