import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';
@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  authorid: any;
  author: any;
  newAuthor: any;
  replyerrors:string[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    // this._route.paramMap
    //   .pipe(
    //     map(params => params.get('author_id')),
    //     switchMap(id => this._httpService.findAuthor(id))
    //   )
    //   .subscribe({
    //     next: author => (this.author = author),
    //     error: error => {
    //       console.log("editauthor",error);
    //     },
    //   });
    this._route.params.subscribe((params: Params) => {  //retrieves the parameters from the route
      console.log(params['id'])
      this.authorid = params['id'];
      this.getAuthor();
      this.newAuthor = { name: "" };
    });

  }
  getAuthor() {
    this._httpService.findAuthor(this.authorid).subscribe(data => {
      console.log("in findAuthor", data);
      this.author = data;
    })
  }
  editAuthor(authornamefromform) {
    const observable = this._httpService.editAuthor(this.author._id, authornamefromform); 
    observable.subscribe({next:data =>{
      console.log("editing author editauthorcomponent", data);
        this._router.navigate(['/edit'])
      },
      error: error=>{
        console.log("error",error)
        this.replyerrors = error.error;
      }

    })
    // this._httpService.editAuthor(this.author._id,authornamefromform).subscribe(data =>{
    //   console.log("editing author editauthorcomponent", data)
    // })

  }
  goHome() {
    this._router.navigate(['/']);
  }

}
