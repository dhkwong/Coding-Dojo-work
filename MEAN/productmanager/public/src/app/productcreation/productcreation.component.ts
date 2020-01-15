import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-productcreation',
  templateUrl: './productcreation.component.html',
  styleUrls: ['./productcreation.component.css']
})
export class ProductcreationComponent implements OnInit {
  newProduct: any;
  replyerrors: string[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newProduct = { title: "", price: 0, image: "" }
  }
  submitProduct() {
    const observable = this._httpService.submitProduct(this.newProduct);
    observable.subscribe({
      next: data => { //listens for the next data
        console.log("added product in addProduct component", data)
        this._router.navigate(['/products'])
      },
      error: error => {
        console.log("error", error)
        this.replyerrors = error.error;
      }

    })
  }
}
