import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    let newObservable = this._http.get('/task/5d7b012237501b61d1b51a1d');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
    newObservable.subscribe(data2=>{
      console.log("get /:taskid");
      console.log("this is the task I found", data2);
      
    })
  }
}
