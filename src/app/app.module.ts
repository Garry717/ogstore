import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './frontpage/navbar/navbar.component';
import { HomeComponent } from './frontpage/home/home.component';
import { ProductsComponent } from './frontpage/products/products.component';
import { ShoppingCartComponent } from './frontpage/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './frontpage/check-out/check-out.component';
import { OrderSuccessComponent } from './frontpage/order-success/order-success.component';
import { MyOrdersComponent } from './frontpage/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LogincomponentComponent } from './frontpage/logincomponent/logincomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';;

import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LogincomponentComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    DataTablesModule,
  ],
  providers: [
    AuthService, 
    AngularFireAuth,
    UserService,
    CategoryService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
