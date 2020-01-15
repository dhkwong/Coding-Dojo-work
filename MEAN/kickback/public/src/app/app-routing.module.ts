import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {YoutubeComponent} from './../app/youtube/youtube.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "youtube" },
  { path: 'youtube', component: YoutubeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
