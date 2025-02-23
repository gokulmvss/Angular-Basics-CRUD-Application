import { Component } from '@angular/core';
import { Product } from '../../../entity/product';
import { FormsModule } from '@angular/forms'
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
  standalone:true
})
export class AddProductComponent {
  newProduct:Product = new Product();

  constructor(private productservice:ProductService, private router: Router){ }
  
  addStatus:boolean=false;
  addproduct(){
    this.addStatus = this.productservice.addNewProduct(this.newProduct);
    // console.log(this.newProduct,this.addStatus);
    this.newProduct = new Product(); // Allocate memory for a new product
    this.router.navigate(['/view-product'])
  }
}
