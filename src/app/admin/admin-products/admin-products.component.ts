import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/modules/product';
import { ProductService } from 'src/app/product.service';

// class DataTablesResponse {
//   data: any[];
//   draw: number;
//   recordsFiltered: number;
//   recordsTotal: number;
// }

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{

  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};

  constructor(private productService: ProductService, private http: HttpClient){
    this.subscription  = this.productService.getAll().subscribe(products => 
      this.filteredProducts = this.products = products);
      
  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this.http.post<DataTablesResponse>(
            'https://ogstore-99015-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
            dataTablesParameters, {}
          ).subscribe(resp => {
            console.log(resp);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data
            });
          });
      },
      columns: [{
        title: 'Title',
        data: 'resp.data'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }

//  filter(query: string){
//   this.filteredProducts = (query)?
//     this.products.filter(p =>
//       p.data.title.toLowerCase().includes(query.toLowerCase())) : this.products;
//       console.log(this.filteredProducts);
//  }

//  ngOnDestroy() {
//      this.subscription.unsubscribe();
//  }
}
