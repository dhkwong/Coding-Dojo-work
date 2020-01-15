import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCustomers() {
    console.log("getCustomers");
    return this._http.get('/api/customers');
  }
  submitCustomer(customer: any) {
    console.log("I'm in submitCustomer", customer);
    return this._http.post('/api/customers', customer);
  }
  addOrder(customer, order) { //for inserting orders
    console.log("I'm adding a order in http.services.ts", customer, order);
    return this._http.put(`/api/customers/${customer.customer._id}`, order);
  }
  deleteCustomer(customer) {
    console.log("I'm deleting a customer in http.services.ts", customer);
    return this._http.delete(`/api/customers/${customer._id}`);
  }
  findCustomer(id: any) {
    console.log("I'm retrieving a customer in findCustomer: http.service", id);
    return this._http.get(`/api/customers/${id}`);
  }
  deleteOrder(id: any, oid: any) {
    console.log("deleting an order from customer in deleteOrder", id, oid);
    return this._http.delete(`/api/customers/${id}/${oid}`);
  }
  updateCustomer(id, customerdata) {
    console.log("I'm editing a customer in http.services.ts", customerdata);
    return this._http.put(`/api/customers/${id}/edit`, customerdata);

  }
}

