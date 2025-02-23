import { Injectable } from '@angular/core';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[]; // initialize array of objects

  constructor() { 
    this.products.push(new Product(1,'Android',1000,"Android Phone","https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/trackside-images/2024/F1_75_Live___Show/2200460667")); // the new product will be added at the end of the list
    this.products.push(new Product(2,'Apple',2000,"Apple Phone")); // the new product will be added at the end of the list
   }

  addNewProduct(newProduct:Product):boolean{
    this.products.push(newProduct); // the new product will be added at the end of the list
    console.log(this.products);
    return true;
  }

  getAllProducts():Product[]{
    return this.products;
  }

  deleteProductById(productid?:number):Product[]{
    this.products=this.products.filter(p=>p.id != productid);
    return this.products;
  }

  updateProduct(updatedProduct: Product): boolean {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      return true;
    }
    return false;
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find(p => p.id === productId);
  }
}
