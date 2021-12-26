import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './shop/product/product.component';
import { CategorieComponent } from './shop/categorie/categorie.component';
import { StyleDirective } from './directives/style.directive';
import { CartComponent } from './shop/cart/cart.component';
import { ShabarganComponent } from './content/shabargan/shabargan.component';
import { Habibian6laComponent } from './content/habibian6la/habibian6la.component';
import { Habibian4laComponent } from './content/habibian4la/habibian4la.component';
import { ShopContentComponent } from './shop/shop-content/shop-content.component';
import { InnerProductComponent } from './inner-product/inner-product.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OrderComponent } from './shop/order/order.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts/contacts.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ShopComponent,
    ProductComponent,
    CategorieComponent,
    StyleDirective,
    CartComponent,
    ShabarganComponent,
    Habibian6laComponent,
    Habibian4laComponent,
    ShopContentComponent,
    InnerProductComponent,
    AuthComponent,
    SignUpComponent,
    OrderComponent,
    ProductOrderComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    AppRoutingModule,
    CarouselModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
