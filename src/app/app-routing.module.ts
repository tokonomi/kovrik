import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './shop/product/product.component';
import { CategorieComponent } from './shop/categorie/categorie.component';
import { CartComponent } from './shop/cart/cart.component';
import { ShabarganComponent } from './content/shabargan/shabargan.component';
import { Habibian6laComponent } from './content/habibian6la/habibian6la.component';
import { Habibian4laComponent } from './content/habibian4la/habibian4la.component';
import { InnerProductComponent } from './inner-product/inner-product.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { OrderComponent } from './shop/order/order.component';
import { ContactsComponent } from './contacts/contacts.component';

let route: Routes = [
  {path: '', component: SideNavComponent, children: [
    {path: '', component: ShabarganComponent, data: {animation: 'isLeft'}},
    {path: 'habibian-6la', component: Habibian6laComponent},
    {path: 'habibian-4la', component: Habibian4laComponent, data: {animation: 'isRight'}}
  ]},
  {path: 'categorie/:categorie', component: CategorieComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'products/:product', component: InnerProductComponent},
  {path: 'login', component: AuthComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'order/:product', component: ProductOrderComponent},
  {path: 'ordered', component: OrderComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'product/:prod', component: ProductComponent},
  {path: 'find-us', component: ContactsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
