import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies: any = [];
  constructor(private _httpService: HttpService) { 

  }

  ngOnInit() {
    this.getMoviesFromService();
  }

  getMoviesFromService() {
    const observable = this._httpService.getMovies();
    observable.subscribe(data => {
      console.log("app.components.ts getMoviesfromservice", data);
      this.movies = data; //finds all cakes and inserts
    })
  }

}
