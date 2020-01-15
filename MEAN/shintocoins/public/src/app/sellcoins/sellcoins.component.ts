import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sellcoins',
  templateUrl: './sellcoins.component.html',
  styleUrls: ['./sellcoins.component.css']
})
export class SellcoinsComponent implements OnInit {
 numbers = [];
  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
  }
 
  getNumbers(){
     this.numbers = this._shintoService.shareNumbers();
  }
  addToNumbers(num){
    this._shintoService.addToNumbers(num);
    this.getNumbers();
  }
}
