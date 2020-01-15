import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';
@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.css']
})
export class ShowmovieComponent implements OnInit {
  movieid: any;
  movie: any;
  replyerrors: string[];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute, //route
    private _router: Router //routes to specified route

  ) { }

  ngOnInit() {
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
    }
    )
  };
  deleteMovie(movie) {
    this._httpService.deleteMovie(movie).subscribe(data => {
      console.log("in deleteMovie", data);
      this._router.navigate([`/movies`])

    })
  }

}
