import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products:any=[];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProductsFromService();
  }
  getProductsFromService() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("app.components.ts getProductsfromservice", data);
      this.products = data; //finds all cakes and inserts

    })
  }
  deleteProduct(product) {
    this._httpService.deleteProduct(product).subscribe(data => {
      console.log("in deleteProduct", data);
      this.getProductsFromService();
    })
  }

}
