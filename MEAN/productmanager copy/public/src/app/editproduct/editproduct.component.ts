import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productid: any;
  product: any;
  replyerrors: string[];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {  //retrieves the parameters from the route
      console.log("params[id]", params['id'])
      this.productid = params['id'];
      this.getProduct();

    });
  }
  getProduct() {
    this._httpService.findProduct(this.productid).subscribe(data => {
      console.log("in findProduct", data);
      this.product = data;
    })
  }
  editProduct(productdatafromform) {
    const observable = this._httpService.editProduct(this.product._id, productdatafromform);
    observable.subscribe({
      next: data => {
        console.log("editing Product editproductcomponent", data)
        this._router.navigate([`/products`])
      },
      error: error => {
        console.log(error);
        this.replyerrors = error;
      }

    })

  }


}
