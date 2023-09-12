import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('/products ').push(product); 
  }

  getAll() {
    return this.db.list('/products ').snapshotChanges()
    .pipe(map( action => {
        return action.map(product => {
        const key = product.payload.key;
        const data = product.payload.val();
        return {data, key};
      })
     } )); 
  }

  get(productId){
    return this.db.object('/products /' + productId).valueChanges();
  }

  update(productId, product){
    return this.db.object('/products /' + productId).update(product);
  }

  delete(productId){
    return this.db.object('/products /' + productId).remove();
  }
}
