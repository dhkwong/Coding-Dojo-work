import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  newCustomer: any;
  replyerrors: string[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService

  ) { }

  ngOnInit() {
    this.newCustomer = { name: "", company: "", location: "" };
  }

  submitCustomer() {
    const observable = this._httpService.submitCustomer(this.newCustomer);
    observable.subscribe({
      next: data => {
        console.log("added customer in newcustomer component", data)
        this._router.navigate(['/customers'])
      },
      error: error => {
        console.log("submitCustomer error", error)
        this.replyerrors = error.error;
      }

    })
  }

}
