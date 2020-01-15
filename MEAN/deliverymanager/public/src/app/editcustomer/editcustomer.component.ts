import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  customerid:any;
  customer:any;
  replyerrors:string[];
  newCustomer:any;
  constructor(private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.customerid = params['id']
      this.getCustomer()
      this.newCustomer = { name: "", company:"", location:"" };
    })
  }
  getCustomer(){
    this._httpService.findCustomer(this.customerid).subscribe(data=>{
      console.log("got customer in editcustomer component", data);
      this.customer = data;
      
    })
  }
  
  editCustomer(editvaluesfromform) {
    const observable = this._httpService.updateCustomer(this.customer.customer._id, editvaluesfromform); 
    observable.subscribe({next:data =>{
      console.log("editing author editauthorcomponent", data);
        this._router.navigate(['/customers'])
      },
      error: error=>{
        console.log("error",error)
        this.replyerrors = error.error;
      }

    })


  }

}
