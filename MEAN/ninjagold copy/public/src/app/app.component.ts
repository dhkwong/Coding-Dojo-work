import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app';
  totalgold: number; //don't need session
  activities: any = [];


  constructor(private httpService: HttpService) {
  }
  ngOnInit() {
    this.totalgold = 0;
  }
  onButtonClickParam(source: String) {
    if (source == "farm") {
      //Math.floor(Math.random() * (+max - +min)) + +min; 
      let result = Math.floor(Math.random() * (+20 - +10)) + +10;
      this.totalgold += result;
      this.activities.push("You've added " + result + " gold!");
    }
    else if (source == "cave") {
      let result = Math.floor(Math.random() * (+10 - +5)) + +5;
      this.totalgold += result;
      this.activities.push("You've added " + result + " gold!");
    }
    else if(source == "house"){
      let result = Math.floor(Math.random() * (+5 - +2)) + +2;
      this.totalgold += result;
      this.activities.push("You've added " + result + " gold!");
    }
    else if(source == "casino"){
      let result = Math.floor(Math.random() * (+50 - +-50)) + +-50;
      this.totalgold += result;
      if(result >= 0){
        this.activities.push("You've added " + result + " gold!");
      }
      else{
        this.activities.push("You've subtracted " + result + " gold!");
      }
      
    }
  }
  // getTasksFromService() {
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     console.log("got our data in restfultaskscontinued", data);
  //     this.tasks = data;

  //   })

  // }
  //   onButtonClick(): void {
  //     this.getTasksFromService();
  //     console.log(`Click event is working`);
  //   }
  //   onButtonClickParam(taskid:any): void { 
  //     this.getTasksFromService()

  //     for (var i in this.tasks){
  //       console.log("tasksiid",this.tasks[i]._id);
  //       if(this.tasks[i]._id === taskid){
  //         this.task = this.tasks[i];
  //         console.log("end of nested for",this.task);
  //       }
  //     }

  //     console.log(`Click param is working`);
  // }




}

