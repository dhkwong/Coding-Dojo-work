import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcreationComponent } from './productcreation/productcreation.component';
import { HomeComponent } from './home/home.component';
import { EditproductComponent } from './editproduct/editproduct.component';



const routes: Routes = [
  {
    path: 'products', component: ProductlistComponent, children: [

      { path: 'edit/:id', component: EditproductComponent },
    ]

  },
  { path: 'products/new', component: ProductcreationComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
