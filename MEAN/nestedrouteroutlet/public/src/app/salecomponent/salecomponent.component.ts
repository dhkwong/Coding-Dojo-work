import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salecomponent',
  templateUrl: './salecomponent.component.html',
  styleUrls: ['./salecomponent.component.css']
})
export class SalecomponentComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
  }

}
