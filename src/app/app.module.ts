import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {bootstrap} from "bootstrap";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductComponent } from './product/product.component';
import { CartquantityComponent } from './cartquantity/cartquantity.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ShoppingcartComponent,
    ProductComponent,
    CartquantityComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
