import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes: any = [];
  newCake: any;
  newReview:any;
  cake: any;
  cakeavg=0;
  public show: boolean = false;
  public buttonName: any = 'Show';

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.newCake = { baker: "",reviews:[], image: "" };
    this.newReview = {rating:Number, description:""};
    this.cakeavg = 0;
    this.getCakesFromService();

  }
  getCakesFromService() {
    const observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("app.components.ts getCakesfromservice");
      this.cakes = data; //finds all cakes and inserts

    })
  }
  onSubmit(){
    this._httpService.submitCake(this.newCake).subscribe(data => {
      console.log("in onsubmit", data);
      this.newCake = { baker: "",reviews:[], description: "" };
      this.getCakesFromService();
    })
  }
  submitReview(thiscake,form:NgForm){
    console.log("form:", form);
    this._httpService.editCake(thiscake,form.value).subscribe(data =>{

      console.log("app.components.ts submitReview", data);
      this.cake=thiscake;
      this.newReview = {rating:Number, description:""};
      form.reset();
      // this.getCakesFromService();
    })
  }
  toggle(cake) {
    this.cake = cake;
    this.show = !this.show;
    console.log("this.cake.ratings", this.cake.ratings)
    for(let ratings of this.cake.ratings){
      console.log("ratings", ratings);
      this.cakeavg += Math.floor(ratings.rating);
    }
    this.cakeavg /= this.cake.ratings.length;
     console.log("avg",this.cakeavg);
    Math.round(this.cakeavg);
    this.cake.avg = this.cakeavg; //creates field of avg in cake
    
    
  }
}

