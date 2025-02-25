import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../entity/product';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-read-component',
  imports: [CommonModule,ChildComponent],
  templateUrl: './read-component.component.html',
  styleUrl: './read-component.component.css',
  standalone:true
})
export class ReadComponentComponent implements OnInit { // on init runs when a new object is initialized
  products:Product[] = [];
  selectedProduct?:Product;
  
  constructor(private productservice:ProductService,private router: Router){ }
  ngOnInit(): void {
    this.products = this.productservice.getAllProducts();
    // console.log(this.products);
  }

  deleteProduct(productid?:number){
    if(confirm("Confirm the cancellation of product ")){
      // console.log("Do you want to delete Product Id:",productid);
      this.products = this.productservice.deleteProductById(productid);
    } 
  }

  updateProductbyid(productid?:number){
    if(confirm(`Confirm the Updation of product ${productid}`)){
      // console.log("Do you want to delete Product Id:",productid);
      this.router.navigate(['/product/update-product', productid]);
    } 
  }

  selectProduct(productselect:Product):void{
    this.selectedProduct = productselect;
    console.log(this.selectedProduct);
  }

  // Method to handle the updated product
  handleProductUpdate(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      console.log('Product updated:', updatedProduct);
    }
  }


}
