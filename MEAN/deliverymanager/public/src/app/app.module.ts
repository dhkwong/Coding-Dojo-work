import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from'@agm/core';
import {HttpClientModule} from '@angular/common/http'//allows http requests for backend
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { FormsModule } from '@angular/forms';//allows ngforms

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    CustomersComponent,
    OrdersComponent,
    NewcustomerComponent,
    EditcustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyBFYJUbY0Up_4yUHO0zGA9Gp0bbhNnS1R8'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
