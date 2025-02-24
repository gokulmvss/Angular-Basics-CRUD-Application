import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entity/product';
import { CommonModule } from '@angular/common';
import { SearchPipePipe } from '../../pipes/search-pipe.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-search-implementation',
  imports: [CommonModule,SearchPipePipe,FormsModule],
  templateUrl: './product-search-implementation.component.html',
  styleUrl: './product-search-implementation.component.css'
})
export class ProductSearchImplementationComponent implements OnInit {
  productitems:Product[] = [];

  constructor(private productservice:ProductService){}
  searchelement='';

  ngOnInit(): void {
    this.productitems = this.productservice.getAllProducts();
  }

  retriveproducts(){
    console.log(this.productitems);
    
  }

}
