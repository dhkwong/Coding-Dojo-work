import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'app';
  tasks:any = [];
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  arr = []


  constructor(private _httpService:HttpService){
  }  
  ngOnInit(){
    this.getTasksFromService();
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'This is a string!';
    this.first_name = 'Daryl';
    this.arr = ["I am iterating through", "an array"]
    // this.tasks.append(this.getTasksFromService()) 
    }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data=>{
      console.log("got our data in restfultaskscontinued",data);
      this.tasks=data;

    })

  }
  onButtonClickParam(taskid: any): void { 
    console.log(`Click event is working with num param: ${taskid}`);
}

  


}

