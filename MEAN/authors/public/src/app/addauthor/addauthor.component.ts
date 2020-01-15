import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  newAuthor: any;
  replyerrors:string[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newAuthor = { name: "" };
  }


  submitAuthor() {
    const observable = this._httpService.submitAuthor(this.newAuthor);
    observable.subscribe({next:data =>{ //listens for the next data
      console.log("added author in addauthor component", data);
        this._router.navigate(['/new'])
      },
      error: error=>{
        console.log("error",error)
        this.replyerrors = error.error;
      }

    // const observable = this._httpService.submitAuthor(this.newAuthor);
    // observable.subscribe(data => {
    //   console.log("adding author in component", data);
    //   if (data['errors']) {
    //     this.replyerrors['errors'] = data['errors'];
    //     console.log(this.replyerrors);
    //   }
    //   else {
    //     this._router.navigate([`/new`])
    //   }
    })
    // this._httpService.submitAuthor(this.newAuthor).subscribe(data => {
    //   console.log("in onsubmit", data);
    //   this.newAuthor = { name:""}; 

    // })
  }

}
