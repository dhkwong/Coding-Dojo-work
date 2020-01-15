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
  newTask: any;
  task: any;
  public show: boolean = false;
  public buttonName: any = 'Show';



  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    this.newTask = { title: "", description: "" };
    
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
    })
  }
  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    this._httpService.submitTask(this.newTask).subscribe(data => {
      console.log("in onsubmit", data);
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    })

  }

  onButtonClick(): void {
    this.getTasksFromService();
    console.log(`Click event is working`);
  }
  onButtonClickParam(taskid: any): void {
    this.getTasksFromService()
    for (var i in this.tasks) {
      console.log("tasksiid", this.tasks[i]._id);
      if (this.tasks[i]._id === taskid) {
        this.task = this.tasks[i];
        console.log("end of nested for", this.task);
      }
    }
    console.log(`Click param is working`);
  }
  taskToShow(task) {

    this.getTasksFromService()
    for (var i in this.tasks) {
      console.log("tasksiid", this.tasks[i]._id);
      if (this.tasks[i]._id === task._id) {
        this.task = this.tasks[i];
        console.log("end of nested for", this.task);
      }
    }

    console.log(`task to show clicked`)
  }
  onEdit(taskid: any) {
    this._httpService.editTask(this.task).subscribe(data => {
      console.log("in onEdit", data);
      this.getTasksFromService();
    })
  }

  toggle(task) {
    this.show = !this.show;
    this.task = task;
  }

  delete(task) {
    this.task = task;
    this._httpService.deleteTask(this.task).subscribe(data => {
      console.log("in delete", data);
      this.getTasksFromService();
    })
  }




}

