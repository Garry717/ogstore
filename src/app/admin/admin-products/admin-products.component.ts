import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/modules/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy{

  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  items: any;

  constructor(private productService: ProductService){
    this.subscription  = this.productService.getAll().subscribe(products => 
      this.filteredProducts = this.products = products);
  }

 filter(query: string){
  this.filteredProducts = (query)?
    this.products.filter(p =>
      p.data.title.toLowerCase().includes(query.toLowerCase())) : this.products;
      console.log(this.filteredProducts);
 }

 ngOnDestroy() {
     this.subscription.unsubscribe();
 }
}
