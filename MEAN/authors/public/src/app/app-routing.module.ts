import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowauthorsComponent} from './showauthors/showauthors.component';//don't need this as a route. instantly called in index
import {EditauthorComponent} from './editauthor/editauthor.component';
import {AddauthorComponent} from './addauthor/addauthor.component';
const routes: Routes = [
  {path:'new', component:AddauthorComponent},
  {path:'edit/:id', component:EditauthorComponent},
  {path:'', pathMatch: 'full', component:ShowauthorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
