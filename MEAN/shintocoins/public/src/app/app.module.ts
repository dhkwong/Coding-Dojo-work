import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShintoService } from './shinto.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';
import { MinecoinsComponent } from './minecoins/minecoins.component';
import { SellcoinsComponent } from './sellcoins/sellcoins.component';
import { BrowseledgerComponent } from './browseledger/browseledger.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuycoinsComponent,
    MinecoinsComponent,
    SellcoinsComponent,
    BrowseledgerComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
