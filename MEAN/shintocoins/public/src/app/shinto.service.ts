import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  numbers = [1,2,3,4]; 
  value:number=1;
  coin:any;
  transactions=[{}]
  
  constructor() { }
  shareNumbers(){
      return this.numbers;
  }
  addToNumbers(num){
      this.numbers.push(num);
  }
  mine(coin){
    
    this.transactions.push(coin)

  }
  buy(){
    this.value++;
  }
  sell(){
    this.value--;
  }

 
}
