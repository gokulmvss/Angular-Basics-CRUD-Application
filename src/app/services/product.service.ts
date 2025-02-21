import { Injectable } from '@angular/core';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[]; // initialize array of objects
  constructor() {  }
  addNewProduct(newProduct:Product):boolean{
    this.products.push(newProduct); // the new product will be added at the end of the list
    return true;
  }
}
