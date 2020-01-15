import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-showauthors',
  templateUrl: './showauthors.component.html',
  styleUrls: ['./showauthors.component.css']
})
export class ShowauthorsComponent implements OnInit {
  authors: any = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService() {
    const observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("app.components.ts getAuthorsfromservice", data);
      this.authors = data; //finds all cakes and inserts

    })
  }
  deleteAuthor(author) {
    this._httpService.deleteAuthor(author).subscribe(data => {
      console.log("in deleteAuthor", data);
      this.getAuthorsFromService();
    })
  }
}
