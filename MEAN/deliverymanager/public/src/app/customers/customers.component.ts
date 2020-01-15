import { Component, OnInit } from '@angular/core';
import { HttpService} from './../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers:any=[];
latitude:any=37.3382;
longitude:any=-121.8863;
zoom:any=11;
  constructor(private _http: HttpService
    ) { }

  ngOnInit() {
    this.getCustomersFromService();
  }
  
  getCustomersFromService(){
    const observable = this._http.getCustomers();
    observable.subscribe(data =>{
      console.log("got customers customers component", data);
      this.customers = data;

    })
  }
  deleteCustomer(customer){
  this._http.deleteCustomer(customer).subscribe(data=>{
    console.log("Customer deleted", data)
    this.getCustomersFromService();

  });

  }

}
