import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';


@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  movie: any;
  movieid: any;
  newReview: any;
  replyerrors: string[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {

  }

  ngOnInit() {
    this.newReview = { name: "", rating: null, description: " " }
    this._route.params.subscribe((params: Params) => {  //retrieves the parameters from the route
      console.log("params[id]", params['id'])
      this.movieid = params['id'];
      this.getMovie();

    });
  }
  getMovie() {
    this._httpService.findMovie(this.movieid).subscribe(data => {
      console.log("in findMovie", data);
      this.movie = data;
    })

  }
  addReview(reviewformdata) {

    const observable = this._httpService.editMovie(this.movie, reviewformdata);
    observable.subscribe({
      next: data => { //listens for the next data
        console.log("added movie in addMovie component", data)
        this._router.navigate(['/movie'])
      },
      error: error => {
        console.log("error", error)
        this.replyerrors = error.error;
      }
    })

  }
}
