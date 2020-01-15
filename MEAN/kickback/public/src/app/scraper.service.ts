import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(private _http: HttpClient) {}

  scrapeYoutube(url: any) {
    console.log("I'm retrieving data from a youtube url in: scraper.service. Url is: ", url);
    return this._http.get(`/api/kickback/youtube`);
  }
}
