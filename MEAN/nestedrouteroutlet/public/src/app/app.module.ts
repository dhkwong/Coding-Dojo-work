import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { ProductdetailcomponentComponent } from './productdetailcomponent/productdetailcomponent.component';
import { BrandcomponentComponent } from './brandcomponent/brandcomponent.component';
import { CategorycomponentComponent } from './categorycomponent/categorycomponent.component';
import { ReviewcomponentComponent } from './reviewcomponent/reviewcomponent.component';
import { AuthorcomponentComponent } from './authorcomponent/authorcomponent.component';
import { AllreviewscomponentComponent } from './allreviewscomponent/allreviewscomponent.component';
import { SalecomponentComponent } from './salecomponent/salecomponent.component';
import { ReviewdetailcomponentComponent } from './reviewdetailcomponent/reviewdetailcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductcomponentComponent,
    ProductdetailcomponentComponent,
    BrandcomponentComponent,
    CategorycomponentComponent,
    ReviewcomponentComponent,
    AuthorcomponentComponent,
    AllreviewscomponentComponent,
    SalecomponentComponent,
    ReviewdetailcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
