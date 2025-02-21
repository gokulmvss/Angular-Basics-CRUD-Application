import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../entity/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-component',
  imports: [CommonModule],
  templateUrl: './read-component.component.html',
  styleUrl: './read-component.component.css'
})
export class ReadComponentComponent implements OnInit { // on init runs when a new object is initialized
  products:Product[] = [];
  
  constructor(private productservice:ProductService){ }
  ngOnInit(): void {
    this.products = this.productservice.getAllProducts();
    console.log(this.products);
  }

  deleteProduct(productid?:number){
    if(confirm("Confirm the cancellation of product ")){
      console.log("Do you want to delete Product Id:",productid);
      this.products = this.productservice.deleteProductById(productid);
    } 
  }

}
