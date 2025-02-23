import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateComponentComponent implements OnInit {
  product: Product = new Product(); 
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = +id; // Convert to number
        console.log("Updating Product with ID:", this.productId);
        this.loadProduct();
      }
    });
  }

  loadProduct() {
    const foundProduct = this.productService.getProductById(this.productId);
    if (foundProduct) {
      console.log(foundProduct);
      this.product = { ...foundProduct }; // Copy details for editing
    } else {
      alert('Product not found!');
      this.router.navigate(['/product/view-product']);
    }
  }

  saveChanges() {
    if (this.productService.updateProduct(this.product)) {
      alert('Product updated successfully!');
      this.router.navigate(['/product/view-product']); // Navigate back
    } else {
      alert('Error updating product!');
    }
  }

  cancelUpdate() {
    this.router.navigate(['/product/view-product']); // Cancel update
  }
}
