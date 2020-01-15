import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }
  getAuthors() {
    console.log("getAuthors");
    return this._http.get('/api/authors');
  }
  submitAuthor(author: any) {
    console.log("I'm in submitauthor", author);
    return this._http.post('/api/authors/newauthor', author);
  }
  editAuthor(id,author) { //for inserting reviews
    console.log("I'm editing a author in http.services.ts", author);
    return this._http.put(`/api/authors/${id}`,author);
  }
  deleteAuthor(author) {
    console.log("I'm deleting a author in http.services.ts", author);
    return this._http.delete(`/api/authors/${author._id}`);
  }
  findAuthor(id:any){
    console.log("I'm retrieving an author in findAuthor: http.service",id);
    return this._http.get(`/api/authors/${id}`);
  }
}
