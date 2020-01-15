import { Component, OnInit } from '@angular/core';
import { HttpService} from './../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
newOrder:any;
customerid:any;
replyerrors:string[];
customer:any;
  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute

  ) {}

  ngOnInit() {
    this.newOrder={product:'', price:null, location:'', deliverydate:'dd/MM/yyyy'}
    this._route.params.subscribe((params:Params)=>{
      console.log("params[id]",params['id']);
      this.customerid = params['id'];
      this.getCustomer();
    })
  }
  getCustomer() {
    this._httpService.findCustomer(this.customerid).subscribe(data => {
      console.log("in findCustomer", data);
      this.customer = data;
    })

  }
  addOrder(orderformdata) {

    const observable = this._httpService.addOrder(this.customer, orderformdata);
    observable.subscribe({
      next: data => { //listens for the next data
        console.log("added order in addOrder component", data)
        
        this._router.navigate(['/customers/'])
      },
      error: error => {
        console.log("error", error)
        this.replyerrors = error.error;
      }
    })

  }
  deleteOrder(orderid){
    console.log("orderid", orderid);
    const observable = this._httpService.deleteOrder(this.customerid, orderid);
    observable.subscribe({
      next: data=>{
        console.log("deleted order in deleteOrder orders component", data)
        this.getCustomer();

      },
      error:error=>{
        console.log("deleteOrder error", error)
        this.replyerrors = error.error;
      }
    })
  }

}
