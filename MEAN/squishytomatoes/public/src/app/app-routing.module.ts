import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ShowmovieComponent} from './showmovie/showmovie.component'
import{MovielistComponent}from './movielist/movielist.component';
import{CreatemovieComponent}from './createmovie/createmovie.component';
import{AddreviewComponent}from './addreview/addreview.component';


const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo:"movies" },
  {path: 'movies',children:[
    {path:'', component:MovielistComponent},
    {path:'new',component:CreatemovieComponent},
    {path:':id/review', component:AddreviewComponent},
    {path:':id', component:ShowmovieComponent}
  ]
},
{ path: '**', component: MovielistComponent }
//   path: 'products',children: [
//     {path: '',component: ProductlistComponent},
//     { path: 'edit/:id', component: EditproductComponent }, //convention is :id/edit
//     { path: 'new', component: ProductcreationComponent },
//     // {path:':id', component:ShowproductComponent},//keep :id below so /new doesn't match with ID param if this display product existed
//   ]
// },
// // { path: 'products/edit/:id', component: EditproductComponent },

// { path: '', pathMatch: 'full', component: HomeComponent },
// { path: '**', component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
