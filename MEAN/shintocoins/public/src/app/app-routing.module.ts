import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SellcoinsComponent} from './sellcoins/sellcoins.component';
import {MinecoinsComponent} from './minecoins/minecoins.component';
import {HomeComponent} from './home/home.component';
import {BuycoinsComponent} from './buycoins/buycoins.component';
import {BrowseledgerComponent} from './browseledger/browseledger.component';


const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'sell', component:SellcoinsComponent },
{path:'mine', component:MinecoinsComponent },
{path:'buy', component:BuycoinsComponent },
{path:'browseledger', component:BrowseledgerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
