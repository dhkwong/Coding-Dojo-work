import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { ProductdetailcomponentComponent } from './productdetailcomponent/productdetailcomponent.component';
import { BrandcomponentComponent } from './brandcomponent/brandcomponent.component';
import { CategorycomponentComponent } from './categorycomponent/categorycomponent.component';
import { ReviewcomponentComponent } from './reviewcomponent/reviewcomponent.component';
import { ReviewdetailcomponentComponent } from './reviewdetailcomponent/reviewdetailcomponent.component';
import { AuthorcomponentComponent } from './authorcomponent/authorcomponent.component';
import { AllreviewscomponentComponent } from './allreviewscomponent/allreviewscomponent.component';
import { SalecomponentComponent } from './salecomponent/salecomponent.component'


const routes: Routes = [
  {
    path: 'products', component: ProductcomponentComponent, children: [
      { path: 'details/:id', component: ProductdetailcomponentComponent },
      { path: 'brand/:brand', component: BrandcomponentComponent },
      { path: 'category/:cat', component: CategorycomponentComponent }]
  },
  {
    path: 'reviews', component: ReviewcomponentComponent, children: [
      { path: 'details/:id', component: ReviewdetailcomponentComponent },
      { path: 'author/:id', component: AuthorcomponentComponent },
      { path: 'all/:id', component: AllreviewscomponentComponent },]
  },
   { path: 'sale', component: SalecomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
