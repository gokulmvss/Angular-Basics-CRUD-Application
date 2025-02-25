import { Component } from '@angular/core';
import { Product } from '../../../entity/product';
import { FormsModule } from '@angular/forms'
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,NgIf], // Importing FormsModule for template-driven forms
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
  standalone: true
})
export class AddProductComponent {
  newProduct: Product = new Product(); // Initialize newProduct as an instance of Product

  constructor(private productservice: ProductService, private router: Router) {}

  addStatus: boolean = false;

  // Method to add a new product
  addproduct(productForm: any) {
    if (productForm.valid) {
      this.addStatus = this.productservice.addNewProduct(this.newProduct);
      this.newProduct = new Product(); // Allocate memory for a new product
      this.router.navigate(['/view-product']); // Navigate to the view product page
    }
  }
}
