import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'//allows http requests for backend
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { ShowmovieComponent } from './showmovie/showmovie.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { FormsModule } from '@angular/forms';//allows ngforms

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    ShowmovieComponent,
    CreatemovieComponent,
    AddreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
