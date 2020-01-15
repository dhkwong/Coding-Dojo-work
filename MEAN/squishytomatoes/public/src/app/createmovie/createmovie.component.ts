import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {
newMovie:any;
replyerrors: string[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {
    
   }

  ngOnInit() {
    this.newMovie = { title: "", name: "", rating: null, description:"" };
  }
  submitMovie() {
    const observable = this._httpService.submitMovie(this.newMovie);
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
