import { Component, OnInit } from '@angular/core';
import {ScraperService} from './../scraper.service'

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
data: any=[];
  constructor(private _scraper:ScraperService) { }

  ngOnInit() {
    this.getYoutubeData();
  }
  getYoutubeData(){
    const observable = this._scraper.scrapeYoutube("test string url");
    observable.subscribe(data=>{
      console.log("receiving data from api in youtube component getYoutubeData method", data);
      this.data.push(data);

    })
  }
}
