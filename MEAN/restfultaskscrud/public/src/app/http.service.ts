import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {

  }
  getTasks() {
    return this._http.get('/tasks');
  }
  submitTask(task: any) {
    console.log("I'm in submittask");
    return this._http.post('/newtask', task);
  }
  editTask(task){
    console.log("I'm editing a task in http.services.ts");
    return this._http.put(`/${task._id}`, task);
  }
  deleteTask(task){
    console.log("I'm deleting a task in http.services.ts", task);
    return this._http.delete(`/${task._id}`);
  }
}

