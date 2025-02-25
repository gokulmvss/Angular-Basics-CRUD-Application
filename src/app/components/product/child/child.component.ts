import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../entity/product';
import { JsonPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [JsonPipe,FormsModule,NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() selectedProduct?: Product;
  @Output() productUpdated = new EventEmitter<Product>(); // EventEmitter to send updated product back to parent

  updatedProduct: Product = { ...this.selectedProduct }; // Initialize the updated product

  ngOnChanges() {
    this.updatedProduct = { ...this.selectedProduct }; // Update the local product whenever the input changes
  }

  saveChanges() {
    this.productUpdated.emit(this.updatedProduct); // Emit the updated product
  }
}
