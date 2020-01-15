import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }
  getCakes() {
    console.log("getCakes");
    return this._http.get('/cakes');
  }
  submitCake(cake: any) {
    console.log("I'm in submitcake");
    return this._http.post('/newcake', cake);
  }
  editCake(cake, review) { //for inserting reviews
    console.log("I'm editing a cake in http.services.ts");
    return this._http.put(`/${cake._id}`, review);
  }
  deleteCake(cake) {
    console.log("I'm deleting a cake in http.services.ts", cake);
    return this._http.delete(`/${cake._id}`);
  }
}

