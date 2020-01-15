import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getProducts() {
    console.log("getProducts");
    return this._http.get('/api/products');
  }
  submitProduct(product: any) {
    console.log("I'm in submitproduct", product);
    return this._http.post('/api/products', product); 
  }
  editProduct(id,product) { //for inserting reviews
    console.log("I'm editing a product in http.services.ts", product);
    return this._http.put(`/api/products/${id}`,product);
  }
  deleteProduct(product) {
    console.log("I'm deleting a product in http.services.ts", product);
    return this._http.delete(`/api/products/${product._id}`);
  }
  findProduct(id:any){
    console.log("I'm retrieving an author in findAuthor: http.service",id);
    return this._http.get(`/api/products/${id}`);
  }

}
