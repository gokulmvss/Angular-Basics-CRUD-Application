import { Component } from '@angular/core';
import { Product } from '../../../entity/product';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProduct:Product = new Product();

  addproduct(){
    console.log(this.newProduct);
  }
}
