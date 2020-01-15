import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';

import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "home" },
  { path: 'home', component: HomeComponent },

  {
    path: 'customers', children: [
      { path: '', component: CustomersComponent },
      { path: 'new', component: NewcustomerComponent },
      { path: ':id/orders', component: OrdersComponent }, //lists all orders of the customer
      {path:':id/edit', component:EditcustomerComponent} //edit customer
    ]
  },



  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
