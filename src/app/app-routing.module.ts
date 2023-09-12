import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontpage/home/home.component';
import { ProductsComponent } from './frontpage/products/products.component';
import { ShoppingCartComponent } from './frontpage/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './frontpage/check-out/check-out.component';
import { OrderSuccessComponent } from './frontpage/order-success/order-success.component';
import { LogincomponentComponent } from './frontpage/logincomponent/logincomponent.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './frontpage/my-orders/my-orders.component';
import { authGuard } from './auth.guard';
import { adminAuthGuard } from './admin-auth.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LogincomponentComponent},
  
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'check-out', component: CheckOutComponent, canActivate: [authGuard]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [authGuard]},
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [authGuard]},
  
  {path: 'admin/products/new', component: ProductFormComponent, canActivate: [authGuard, adminAuthGuard]},
  {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [authGuard, adminAuthGuard]},
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [authGuard, adminAuthGuard]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [authGuard, adminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
