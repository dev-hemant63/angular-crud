import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GetProductsComponent } from './Components/get-products/get-products.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import {FormsModule} from '@angular/forms';
import { ModalModule } from '@developer-partners/ngx-modal-dialog';
import { ProductModalComponent } from './Components/product-modal/product-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GetProductsComponent,
    CreateProductComponent,
    ProductViewComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
