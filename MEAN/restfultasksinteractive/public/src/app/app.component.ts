import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app';
  tasks: any = [];
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  arr = [];
  task:any;


  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    // this.onButtonClick();
    // this.getTasksFromService();
    // this.num = 7;
    // this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    // this.str = 'This is a string!';
    // this.first_name = 'Daryl';
    // this.arr = ["I am iterating through", "an array"]
    // this.tasks.append(this.getTasksFromService()) 
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("got our data in restfultaskscontinued", data);
      this.tasks = data;

    })

  }
  onButtonClick(): void {
    this.getTasksFromService();
    console.log(`Click event is working`);
  }
  onButtonClickParam(taskid:any): void { 
    this.getTasksFromService()

    for (var i in this.tasks){
      console.log("tasksiid",this.tasks[i]._id);
      if(this.tasks[i]._id === taskid){
        this.task = this.tasks[i];
        console.log("end of nested for",this.task);
      }
    }
    
    console.log(`Click param is working`);
}




}

