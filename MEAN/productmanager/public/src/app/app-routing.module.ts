import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcreationComponent } from './productcreation/productcreation.component';
import { HomeComponent } from './home/home.component';
import { EditproductComponent } from './editproduct/editproduct.component';



const routes: Routes = [
  {
    path: 'products',children: [
      {path: '',component: ProductlistComponent},
      { path: 'edit/:id', component: EditproductComponent }, //convention is :id/edit
      { path: 'new', component: ProductcreationComponent },
      // {path:':id', component:ShowproductComponent},//keep :id below so /new doesn't match with ID param if this display product existed
    ]
  },
  // { path: 'products/edit/:id', component: EditproductComponent },
  
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
